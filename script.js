/* Smooth scrolling enabled */
html {
    scroll-behavior: smooth;
}

/* Full page height fixed */
body {
    font-family: 'Poppins', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: linear-gradient(135deg, #004d40, #00897b);
    color: #fff;
}

/* Scrollable page with full access */
header, section, footer {
    position: relative;
    z-index: 10;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 40px;
    background: rgba(0, 77, 64, 0.9);
    color: white;
    font-size: 1.5rem;
    font-weight: bold;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
}

.contact-btn {
    background: #ff9800;
    color: white;
    padding: 10px 20px;
    border-radius: 30px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s ease-in-out;
}

.contact-btn:hover {
    background: #e68900;
    transform: scale(1.05);
}

/* Ensures hero section is fully visible but allows scrolling */
#hero {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('img/construction-bg.jpg') no-repeat center center/cover;
    text-align: center;
    color: white;
    font-size: 2.8rem;
    font-weight: bold;
    text-shadow: 3px 3px 10px rgba(0,0,0,0.5);
}

#projects, #contact {
    padding: 60px 20px;
    text-align: center;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ff9800;
}

.gallery {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    padding: 20px;
}

.gallery img {
    width: 30%;
    height: auto;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
}

.gallery img:hover {
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.5);
}

#contact a {
    text-decoration: none;
    font-size: 1.5rem;
    color: #ff9800;
    font-weight: bold;
    transition: color 0.3s;
}

#contact a:hover {
    color: #fdd835;
}

footer {
    text-align: center;
    padding: 15px;
    background: rgba(0, 77, 64, 0.9);
    color: white;
}
