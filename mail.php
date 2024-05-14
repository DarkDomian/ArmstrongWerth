<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $inputData = file_get_contents('php://input');
    
    if ($inputData !== false) {
        
        $data = json_decode($inputData, true);

        if ($data !== null && is_array($data) &&
            isset($data['consentCheckbox']) && $data['consentCheckbox'] !== 'on') {
            
            $sender_name = isset($data['username']) ? htmlspecialchars($data['username']) : '';
            $sender_email = isset($data['email']) ? htmlspecialchars($data['email']) : '';
            $sender_phone = isset($data['phone']) ? htmlspecialchars($data['phone']) : '';
            $submitted_hash = isset($data['submitted_hash']) ? htmlspecialchars($data['submitted_hash']) : '';
            
            $to = 'shop@new.aw-oboe.com.au';
            $subject = "Contact Request from " . ucwords(strtolower($sender_name));
            
            $message = "User has left their contact information on the website and is awaiting a response.\n\n";
            $message .= "Name: " . ucwords(strtolower($sender_name)) . "\n";
            $message .= "Email Address: " . $sender_email . "\n";
            $message .= "Phone Number: " . $sender_phone . "\n";

            $message .= "\n----------------------\n";
            $message .= "This message was generated in response to a form submission on new.aw-oboe.com.au.\n";
            $message .= "Provided by Demian Domozhirov.";
                        
            $headers = "From: " . $sender_email;
            
            $hash = hash('sha256', $message);
            if ($submitted_hash === $hash) {

                $success = false;
                $condition = "You have already submitted your information.";
            } else {

                if (mail($to, $subject, $message, $headers)) {
                    $success = true;
                    $condition = "Your message has been sent successfully.";
                    // setcookie('submitted_hash', $hash, time() + (7 * 24 * 3600));
                } else {
                    $success = false;
                    $condition = "Sorry, something went wrong. Please try again later.";
                }                
            }
                

            $response = array('success' => $success, 'message' => $condition, 'cookie' => $hash);
            header('Content-Type: application/json');
            echo json_encode($response);
        } else {
            
            http_response_code(400);
            echo json_encode(array('success' => false, 'message' => 'Invalid or missing data.'));
        }
    } else {
        
        http_response_code(400);
        echo json_encode(array('success' => false, 'message' => 'Failed to read input data.'));
    }
} else {
    
    http_response_code(405);
    echo json_encode(array('success' => false, 'message' => 'Method Not Allowed'));
}
?>