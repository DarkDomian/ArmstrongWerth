<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="Armstrong & Werth oboe factoty" content="Here is you can finde beutiful musical instrument's - oboe. Also we sold English Horn">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Armstrong & Werth oboe</title>

    <link rel="stylesheet" href="<?php echo esc_url( get_stylesheet_uri() ); ?>">

</head>
<body>
    <header id="top-menu">
        <div class="logo">
            <a href="#top"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/mini-logo.jpg" alt="Logotype"></a>
        </div>

        <nav class="navigation-menu"> <!-- menu -->
            <ul>
                <li><a class="menu-object" href="#about">About us</a></li>
                <li><a class="menu-object" href="#products">Catalog</a></li>
                <li><a class="menu-object" href="#partners">Distributors</a></li>
                <li><a class="menu-object" href="#contacts">Contacts</a></li>
                <li><button class="popup-open menu-object" data-popup-id="cta-popup-content">Call Back</button></li>
                <li>
                    <select id="languageSelector">
                        <option value="en">English</option>
                        <option value="ru">Русский</option>
                        <option value="ch">中文</option>
                    </select>
                </li>
            </ul>
        </nav> <!-- end of menu section -->
    </header>

    <div id="popup-container"> <!-- pop up container is here -->

        <div class="popup-content" id="cta-popup-content"><!-- CTA content -->
            <div>
                <button class="popup-close" data-popup-id="cta-popup-content" >Close</button>
                <h4 class="title">Immerse yourself in a world where every note resonates with the passion of true craftsmanship.</h4>
            </div>
            <form action="<?php echo esc_url( get_template_directory_uri() ); ?>/mail-handler.php" method="POST">            
                <ul>
                    <li><div><label for="name">Name:</label></div>
                    <div><input type="text" id="name" name="name"></div></li>

                    <li><div><label for="email">email</label></div>
                    <div><input type="email" id="email" name="email"></div></li>

                    <li><div><label for="tel">Tel.</label></div>
                    <div><input type="tel" id="tel" name="tel"></div></li>

                    <li><div><input type="submit" value="Submit"></div></li>
                </ul>
            </form>            
        </div>


        <div class="popup-content" id="regal-popup-content"><!-- REGAL oboe content -->
            <button class="popup-close" data-popup-id="regal-popup-content">Close</button>
            <img src="way/to/img" alt="Regal Oboe">
            <h3>Regal Oboe</h3>
            <p> Indulge in the unparalleled sophistication of our premium professional model, the Continental-style AW Regal Oboe. 
                Meticulously crafted to unveil a rich, enveloping sound, this instrument showcases a seamlessly homogeneous timbre across its entire range. 
                Ensuring unwavering pitch stability without compromising flexibility or tonal color, the AW Regal Oboe stands as a pinnacle in our commitment to delivering high-quality instruments. 
                Elevate your musical journey with the perfect companion, designed for musicians at the zenith of their careers.
            </p>
            <div>
                <h4>Explore the features of the AW Regal oboe:</h4>
                <ul>
                    <li>Crafted from highly seasoned African Blackwood for exceptional resonance.</li>
                    <li>Enhanced durability with metal tenon socket linings and tenon protectors.</li>
                    <li>Undercut tone holes for precise and responsive playing.</li>
                    <li>Full Gillet Conservatory system, featuring a 3rd octave key with a double vent for low B and low Bb.</li>
                    <li>Sturdy nickel silver keys with thick silver plating.</li>
                    <li>Traditional French tuning scale for authentic musical expression.</li>
                    <li>Semi-automatic configuration for versatile playing styles.</li>
                    <li><b>Important Note:</b> All AW oboes share the same specially designed and carefully constructed bore, ensuring acoustically superior sound, response, and stability.</li>
                    <li>Enjoy peace of mind with a 1-year warranty.</li>
            </div>
        </div>

        
        <div class="popup-content" id="imperial-popup-content">
            <button class="popup-close" data-popup-id="imperial-popup-content">Close</button>
            <img src="way/to/img" alt="Imperial Oboe">
            <h3>Imperial Oboe</h3>
            <p> Introducing the Imperial Oboe, a traditional instrument designed for musicians who value clarity of expression. 
                With its tone holes design inspired by traditional instruments of the 1960s and 1970s, the Imperial oboe serves as an artistic compass for musicians in Cleveland, London, Munich, and beyond. 
                Renowned for its exceptional quality, the Imperial stands as our standard professional model, embodying the essence of tradition for musicians worldwide.</p>
            <div>
                <h4>Discover the highlights of the AW Imperial oboe:</h4>
                <ul>
                    <li>Immerse yourself in the rich tones of the highly seasoned African Blackwood body.</li>
                    <li>Increased durability with metal tenon socket linings and tenon protectors.</li>
                    <li>Experience precise playing with undercut tone holes following a traditional setup.</li>
                    <li>Full Gillet Conservatory system featuring a 3rd octave key and the standard low Bb vent key.</li>
                    <li>Sturdy nickel silver keys with thick silver plating for a reliable performance.</li>
                    <li>Embrace the traditional French tuning scale for authentic musical expression.</li>
                    <li>Choose your playing style with the semi-automatic configuration.</li>
                    <li><b>Important Note:</b> All AW oboes share the same specially designed and carefully constructed bore, ensuring acoustically superior sound, response, and stability.</li>
                    <li>Enjoy worry-free playing with a 1-year warranty.</li>
            </div>
        </div>

        <div class="popup-content" id="pan-popup-content">
            <button class="popup-close" data-popup-id="pan-popup-content">Close</button>
            <img src="way/to/img" alt="Pan Oboe">
            <h3>Pan Oboe</h3>
            <p> Meet the Pan, our reigning bestseller that has captured hearts from the Australian outback to the Siberian wilderness. 
                With a robust ABS material body and a full conservatory mechanism, the Pan is the go-to choice for oboists worldwide, 
                offering trouble-free service and winning the favor of the crowd. The AW Pan oboe stands as a testament to our dedication to sound quality and playability, 
                fostering creativity and cultivating a profound love for music. 
            </p>
            <div>
                <h4>Explore the standout features of the AW Pan oboe:</h4>
                <ul>
                    <li>Effortless playing with a lightweight and trouble-free ABS body.</li>
                    <li>Precision in every note with undercut tone holes.</li>
                    <li>Comprehensive playing range with the Full Gillet Conservatory system and 3rd octave key.</li>
                    <li>Durability meets performance with robust nickel silver keys and thick silver plating.</li>
                    <li>Achieve authentic musical expression with the traditional French tuning scale.</li>
                    <li>Adapt to your playing style with the semi-automatic configuration.</li>
                    <li>Reduced weight for added convenience.</li>
                    <li><b>Important Note:</b> All AW oboes share the same specially designed and carefully constructed bore, ensuring acoustically superior sound, response, and stability.</li>
                    <li>Enjoy peace of mind with a 1-year warranty.</li>
            </div>
        </div>        
                    
        <div class="popup-content" id="rocket-popup-content">
            <button class="popup-close" data-popup-id="rocket-popup-content">Close</button>
            <img src="way/to/img" alt="Rocket Oboe">
            <h3>Rocket and Rocket Plus Oboes </h3>
            <p> Meet the Rocket and Rocket "plus" - your lightweight entry into the world of oboe playing, tailor-made for budding musicians. 
                Crafted with a lightweight ABS body, short reach keywork, and a simplified mechanism, the Rocket series offers simplicity and brilliance for beginners. 
                It's the ideal choice for young players, providing convenience and ease on their musical journey. 
                Whether your child is exploring the oboe for the first time or seeking a hassle-free instrument, the Rocket series ensures an enjoyable and accessible introduction to the world of music. 
            </p>
            <div>
                <h4>Explore the standout features of the AW Rocket oboes:</h4>
                <ul>
                    <li>Effortless playing with a lightweight and trouble-free ABS body.</li>
                    <li>Precision in every note with undercut tone holes.</li>
                    <li>Ideal for beginners with short reach keywork and a simplified mechanism.</li>
                    <li>Durability meets performance with robust nickel silver keys and thick silver plating.</li>
                    <li>Achieve authentic musical expression with the traditional French tuning scale.</li>
                    <li>Adapt to your playing style with the semi-automatic configuration.</li>
                    <li>Reduced weight for added convenience.</li>
                    <li><b>Important Note:</b> All AW oboes share the same specially designed and carefully constructed bore, ensuring acoustically superior sound, response, and stability.</li>
                    <li>Enjoy peace of mind with a 1-year warranty.</li>
            </div>
        </div>

        <div class="popup-content" id="horn-popup-content">
            <button class="popup-close" data-popup-id="horn-popup-content">Close</button>
            <img src="way/to/img" alt="English Horn">
            <h3>English Horn</h3>
            <p> Welcome to the world of the AW English Horn - a premium instrument designed for professionals seeking a rich and stable sound with harmonics. 
                If you're fond of the oboe and looking to explore its closest relative, or perhaps expanding your skills to double reed instruments, 
                the English Horn is your next musical adventure. Experience the depth and versatility of the AW English Horn, 
                crafted for musicians ready to explore new horizons in their musical journey. 
            </p>
            <div>
                <h4>Uncover the exceptional features of the AW English Horn: </h4>
                <ul>
                    <li>Immerse yourself in a rich and stable sound with the highly seasoned African Blackwood body.</li>
                    <li>Enhance durability with metal tenon socket linings and tenon protectors.</li>
                    <li>Achieve precision in every note with undercut tone holes.</li>
                    <li>Experience a full range of expressive possibilities with the Gillet Conservatory system and 3rd octave key.</li>
                    <li>Enjoy a robust and reliable instrument with nickel silver keys and thick silver plating.</li>
                    <li>Maintain authenticity in your playing with the traditional French tuning scale.</li>
                    <li>Adapt to your style effortlessly with the semi-automatic configuration.</li>
                    <li>Secure your investment with a 1-year warranty.</li>
            </div>
        </div>
                    

    </div>
    
    <main>
        <section id="welcome-section">
            <div class="background-image"><!-- full img -->        
                <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/wellcome-bg.jpg" alt="Welcome Image" width="1600" height="900">            
                <div class="wellcome-overlay">
                    <h2 class="title">Welcome to Armstrong-Werth</h2>
                    <h4 class="subtitle">Experience the beauty of music with our exceptional collection of oboes</h4>
                    <button class="popup-open" data-popup-id="cta-popup-content">Explore Now</button>
                </div>
            </div>
        </section><!-- end of welcome section -->

        <section id="about">
            <div class="background-image">
                <img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/crafts.jpg" alt="Welcome Image" width="1600" height="900">            
                <div class="craft-overlay">
                    <h2 class="title">Harmony Crafters</h2>
                    <h4 class="subtitle">Embark on a harmonious journey: discover the symphony behind our craft, where musical mastery meets timeless artistry</h4>
                    <p>We are a team of seasoned experts with years of experience in crafting outstanding musical instruments. Our CEO, dedicating a lifetime to music, leads our team, ensuring the highest standards of quality and reliability. We create instruments that compete with the best, demonstrating the experience is not just a matter of years.</p>                   
                </div>
                <div class="statistic-overlay">
                    <ul>
                        <li>21 years in the industry</li>
                        <li>14 distributors worldwide</li>
                        <li>over 486 instruments sold per year</li>
                    </ul>
                </div>
            </div>
        </section><!-- end of about section -->

        <section id="products" >
            <div class="discription-of-products-section">
                <h2 class="title">Discover Our Products</h2>
                <h4 class="subtitle">Our instruments are the result of mastery, attention to detail, and a deep understanding of a musician's needs</h4>
                <p>Our instruments are the result of mastery, attention to detail, and a deep understanding of a musician's needs</p>
            </div>
            <div class="catalog-grid" >                
                <div class="popup-open catalog-card" data-popup-id="regal-popup-content" data-normal-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-regal.jpg" data-hover-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/regal.jpg">
                    <img class="card-image" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-regal.jpg" alt="Regal Oboe Image">
                </div>

                <div class="popup-open catalog-card" data-popup-id="imperial-popup-content" data-normal-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-imperial.jpg" data-hover-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/imperial.jpg">
                    <img class="card-image" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-imperial.jpg" alt="Imperial Oboe Image">                
                    
                    
                </div>

                <div class="popup-open catalog-card" data-popup-id="pan-popup-content" data-normal-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-pan.jpg" data-hover-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/pan.jpg">
                    <img class="card-image" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-pan.jpg" alt="Pan Oboe Image">
                    
                    
                </div>

                <div class="popup-open catalog-card" data-popup-id="rocket-popup-content" data-normal-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-rocket.jpg" data-hover-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/rocket.jpg">
                    <img class="card-image" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-rocket.jpg" alt="Rocket Oboe Image">
                    
                    
                </div>

                <div class="popup-open catalog-card" data-popup-id="horn-popup-content" data-normal-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-horn.jpg" data-hover-image="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/horn.jpg">
                    <img class="card-image" src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/default-horn.jpg" alt="English Horn Image">
                    
                     
                </div>               
            </div><!-- end of grid -->
        </section><!-- end of catalog section -->

        <section id="process">
            <div>
                <h2 class="title">The Art of Instrument Production</h2>
                <h4 class="subtitle">Unveiling the craftsmanship: step into the exquisite world of instrument production with Armstrong-Werth, where precision meets passion in every harmonious creation</h4>
                <p>Explore the meticulous world of instrument craftsmanship with Armstrong-Werth. Our master craftsmen weave unparalleled sound quality and durability into each musical masterpiece. From handpicking the finest materials to precision tuning, every detail reflects our commitment to the art of instrument making. </p>
            </div>

            <video controls autoplay muted autopause="0" id="videoPlayer">
                <!-- Путь к вашему видеофайлу -->
                <source src="<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/wood-craftwork-1.mp4" type="video/mp4">
                <script>
                    const videoSources = [
                    '<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/wood-craftwork-1.mp4',
                    '<?php echo esc_url(get_template_directory_uri()); ?>/assets/img/wood-craftwork-2.mp4',
                    ];
                </script>                
                Ваш браузер не поддерживает тег video.
            </video>    
        </section><!-- end of process section -->

        <div id="cta-short" >
            <h2 class="title">Explore Harmonic Beauty</h2>
            <h4 class="subtitle">Immerse yourself in a world where every note resonates with the passion of true craftsmanship.</h4>
            <form action="" method="">
                <!-- forms element -->
            </form>
            <button scr="way/to/image" alt="exit" onclick="hidePopup('common-popup')"></button>
        </div>
    

        <section id="partners">
            <div>
                <h2 class="title">Explore Authorized Retailers</h2>
                <h4 class="subtitle">Discover a curated selection of trusted music stores worldwide where you can seamlessly purchase our instruments. </h4>
                    <p> Our network of authorized retailers ensures a convenient and reliable shopping experience for our valued customers. 
                        Simply click on the logos below to explore and make your purchase from our esteemed partners. 
                        Your musical journey starts with a click. 
                    </p>
            </div>
        </section><!-- end of partners section -->

        <section id="founder">
            <div>
                <h2 class="title">A Legacy Built on Passion</h2>
                <h4 class="subtitle">Meet our founder, John Armstrong. His unwavering dedication towards creating exceptional musical instruments has been the driving force behind our success. Learn more about his vision and commitment to the art of music. </h4>
                    <p> John Armstrong is an Australian oboist and oboe maker with a rich history in the music industry. He has worked for reputable companies such as T.W. Howarth in London, 
                        the KG reed company in Shanghai, Rigoutat in Paris, Jinyin and Bailicheng in Hebei, China. His extensive experience and dedication to the craft make him a respected div in the world of oboe making.
                        Having started making oboes in 1989, John has since been committed to producing high-quality instruments. In 2006, he partnered with oboe maker Tony Ward to create the Armstrong Ward oboe for the Australian market, 
                        later rebranded the "KG" oboe in Shanghai. John's continuous dedication to improving oboe manufacturing has led to the development of the Armstrong Werth brand, which aims to provide oboe players with more affordable and rewarding playing experiences through modern manufacturing techniques and quality components. 
                        His designs are a reflection of both tradition and the evolving preferences of today's oboists. 
                    </p>

                    <blockquote>
                        <p>"In every instrument we craft, we weave the timeless threads of culture and creativity, giving life to the symphony of human expression."</p>
                        <cite>© Armstrong John</cite>
                    </blockquote>
            </div>

            <div class="timeline">
                <h2 class="title">Embark on John Armstrong's musical odyssey through time: </h2>
                <ul>
                    <li>
                        <div class="timeline-date">1980</div>
                        <div class="timeline-description">At just 13, John's symphony begins at the Sydney Conservatorium High School, where oboe lessons lay the groundwork for his future in London, painted with the hues of a scholarship.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="1980"></div>
                    </li>
                    <li>
                        <div class="timeline-date">1989</div>
                        <div class="timeline-description">The heart of London becomes a stage for enchantment as John explores the Howarth oboe factory in Worthing. A catalyst moment, this visit kindles a lifelong passion, guiding him through two years as an apprentice before his return to Australia.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="1989"></div>
                    </li>
                    <li>
                        <div class="timeline-date">2003</div>
                        <div class="timeline-description">A harmonious chord strikes when John seamlessly weaves his musical career with the art of crafting oboes, marking a pivotal transition from full-time musician to a devotee of oboe making and repair.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="2003"></div>
                    </li>
                    <li>
                        <div class="timeline-date">2006</div>
                        <div class="timeline-description">A significant chapter unfolds as John acquires Tony Ward's oboe-making tools. The first AW oboes, born in 2006, carry the legacy of 'Armstrong Ward,' a collaborative masterpiece drawing inspiration from a cherished French style.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="2006"></div>
                    </li>
                    <li>
                        <div class="timeline-date">2008</div>
                        <div class="timeline-description">Shanghai becomes the canvas as John shifts AW oboe production, harmonizing with joint ventures for Howarth and Rigoutat until 2012. Collaborations with K.G. oboe reed company and the development of key designs in Korea enrich this chapter.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="2008"></div>
                    </li>
                    <li>
                        <div class="timeline-date">2012</div>
                        <div class="timeline-description">Shanghai echoes with K.G. oboes, while AW now embodies Armstrong Werth since Tony Ward's 2012 retirement. John's expertise blossoms, sought after as an expert in establishing production facilities.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="2012"></div>
                    </li>
                    <li>
                        <div class="timeline-date">2020</div>
                        <div class="timeline-description">A new crescendo unfolds as John, invited to a European state, pioneers a locally crafted oboe. Abroad, he orchestrates the continued production of Armstrong Werth oboes, embodying a foreign expert's role.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="2020"></div>
                    </li>
                    <li>
                        <div class="timeline-date">Present</div>
                        <div class="timeline-description">Rooted in Australia, Armstrong Werth Pty Ltd harmonizes local and international expertise from Europe, China, and Korea. John, a proud member of the International Double Reeds Society, resonates through global conferences and musical instrument trade exhibitions.</div>
                        <div class="timeline-image"><img src="way/to/img" alt="Present"></div>
                    </li>                                
                </ul>
            </div>

        </section><!-- end of founder section -->

        <section id="faq">
            <h2 class="title">Your Queries Answered</h2>
            <h4 class="subtitle">Explore shipping, warranty, returns, and more in our FAQ section. Reach out to our friendly customer support team for personalized assistance. </h4>   
            <div class="faq">
                <div class="question">
                    <h5>What is the warranty for this instrument, and what does it cover? </h5>
                    <div class="answer">
                        <p>A: Your AW oboe comes with a solid 1-year warranty covering both the body and mechanism. Unfortunately, it won't shield against accidental damage, so keep those playing sessions accident-free!</p>
                    </div>
                </div>
                <div class="question">
                    <h5>How should I care for and maintain this instrument to ensure its longevity?</h5>
                    <div class="answer">
                        <p>A: Post-performance TLC is key! After playing, give your oboe a gentle swab or pull-through. For wooden beauties like the Regal, Imperial, and English Horn, show some extra love by lightly oiling the top joint with bore oil every week for the first 2 months. Assemble with a touch of cork grease on the tenons, occasionally hand-polish the mechanism, and rest easy - the mechanism is fully oiled during final assembly. If adjustments are needed during the warranty period, we've got your back - details of a nearby technician and free adjustments if done by an approved technician.</p>
                    </div>
                </div>
                <div class="question">
                    <h5>Are there any recommended accessories or products that should be used with this instrument? </h5>
                    <div class="answer">
                        <p>A: Your AW oboe plays at a cool 442! Pair it with European or USA school reeds. Feeling Euro? Opt for the Chiarugi 47mm, type 2. And for cleaning, choose a pull-through with a cord on both ends to avoid those "oops, it's stuck" moments inside the bore!</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>What is the return policy if I am not satisfied with the instrument? </h5>
                    <div class="answer">
                        <p>A: Not feeling the musical magic? No worries! If you're not over the moon with your instrument within the first 2 weeks, you can return it, no questions asked. And even after that, if something's not quite right during the warranty period, we've got your back - swap it for a shiny new one after confirmation of a fault by an approved technician.</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>How long will it take to receive my order, and do you offer expedited shipping? </h5>
                    <div class="answer">
                        <p>A: Snagging your dream AW oboe is a breeze when you go through our awesome dealers! If they happen to be out of stock on your preferred model, don't fret. There might be a brief waiting period (usually around a month), but hey, good things come to those who wait. Plus, if your dealer gives us the nod, we can fast-track an oboe straight to your doorstep!</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>Do you offer any financing options for purchasing this instrument? </h5>
                    <div class="answer">
                        <p>A: Nope, we don't have financing options on our end, but guess what? Some of our awesome dealers might! They could hook you up with a sweet deal.</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>Can I try this instrument before purchasing it, and if so, how do I arrange a demo or trial period?</h5>
                    <div class="answer">
                        <p>A: Want to get hands-on with your potential AW oboe? Swing by our dealership spots for an initial test play! If you need more quality time, no worries - ask your dealer to set you up with a 1-week demo outside the store. And hey, if you're a pro teacher or player, testing in your natural habitat or an orchestral setting is totally on the table. Just loop in your dealer, and pending their decision, they'll make it happen!</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>What is the process for repairing or servicing this instrument if it becomes damaged or malfunctions?</h5>
                    <div class="answer">
                        <p>A: Good news - our AW dealers are like superheroes for oboe repairs! They can handle most fixes, including warranty adjustments and even some accidental oopsies (not covered by warranty, though). If things get wild with severe damage, don't worry - our manufacturing wizards might step in to save the day.</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>Do you offer any customization options for this instrument, such as engraving or personalization?</h5>
                    <div class="answer">
                        <p>A: Make your AW oboe uniquely yours! Add extra keywork for a personalized vibe. Looking for a touch of glamour? Rose gold plating for the mechanism is just a request away. Explore the perfect blend with our hybrid models - wooden joints and ABS synthetic joints in sync. Dreaming of a specially adorned oboe? Engraving or decoration services are on the table - just let us know what you have in mind!</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>How can I contact customer support if I have any questions or issues with my order or the instrument itself? </h5>
                    <div class="answer">
                        <p>A: Chat or call, your pick! If you're all about direct vibes, find our contact info on the website for a quick call. But hey, if chatting is more your speed, catch us on our social network pages - the chat is wide open. Not in the mood for either? No problem! Just leave your details below, and we'll reach out to you!</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>What types of musicians is this instrument best suited for? </h5>
                    <div class="answer">
                        <p>A: From tiny virtuosos to seasoned pros, our oboe family has something for everyone and every style. Let's meet the crew: Regal, the black wood virtuoso; Imperial, its equally talented sibling in the same classy material; Pan, the ABS sensation with the same pro vibes as Imperial; and the adorable Rocket and Rocket "plus," perfect for the budding musicians. For the juicy details on each character, flip through the catalog - it's a musical treasure trove!</p>
                    </div>
                </div>
                </div>
                <div class="question">
                    <h5>Are there any additional accessories or features included with the instrument, such as a case or cleaning kit? </h5>
                    <div class="answer">
                        <p>A: Your AW oboe comes with a little entourage! Picture this - a cozy case and its stylish cover, a comfy reed box, a trusty pull-through, and a polishing cloth for that extra shine. It's like your oboe has its own squad, ready to keep it in tip-top shape!</p>
                    </div>
                </div>
                            
            </div>
        </section><!-- end of FAQ section -->

        <div id="cta-large" >
            <h2 class="title">Start Your Melodic Journey Today!</h2>
            <h4 class="subtitle">We believe in nurturing strong partnerships with like-minded individuals who share our love for music. Whether you are an instrument seller or a passionate musician looking to collaborate, we welcome you to join our community of partners. </h4>
            <form action="" method="">
                <!-- forms element -->
            </form>
            <button scr="" alt="exit" onclick="hidePopup('common-popup')"></button>
        </div>
 
    </main>

    <footer>
    <div id="contacts">
        <h4>Our contacts</h4>
        <p>Tel.: +374 55 15-10-96</p>
        <p>Email: info@example.com</p>
    </div>

    <div class="footer-navigation">
        <ul>
            <li><a  href="#about">About us</a></li>
            <li><a  href="#catalog">Catalog</a></li>
            <li><a  href="#partners">Distributors</a></li>
            <li><button class="menu-object cta-button">Call Back</button></li>
        </ul>
    </div>

    <div class="logo">
        <a href="#top"><img src="way/to/logo" alt="Logotype"></a>
    </div>

    <div class="credits">
        <p><a href="https://t.me/Ministrely">designer</a></p>
        <p><a href="https://t.me/DarkVib">programmer</a></p>
    </div>
    
    <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/js/main.js"></script>

    </footer><!-- end of footer section -->


</body>
</html>
