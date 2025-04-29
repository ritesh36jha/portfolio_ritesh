# Ritesh Ranjan - Pharmacy Student Portfolio

A modern, responsive portfolio website for Ritesh Ranjan, a pharmacy student, built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Modern UI with smooth animations
- Interactive sections for education, skills, certificates, and more
- Contact form for potential employers or collaborators
- Smooth scrolling navigation
- Mobile-friendly navigation menu

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid layouts)
- JavaScript (ES6+)
- Font Awesome icons
- Google Fonts

## File Structure

- `index.html` - Main HTML file
- `style.css` - CSS styles
- `script.js` - JavaScript functionality
- Various PDF files for resume and certificates
- Profile photo in HEIC format

## How to Use

1. Clone or download this repository
2. **Important**: Convert the profile photo from HEIC to JPG or PNG format:
   - Option 1: Use the provided Python script (requires Python with pillow and pillow-heif):
     ```
     pip install pillow pillow-heif
     python convert-image.py
     ```
   - Option 2: Use online converters like [HEICtoJPG](https://heictojpg.com/) or [CloudConvert](https://cloudconvert.com/heic-to-jpg)
   - Save the converted image as `ritesh-profile.jpg` in the same folder
   - Update the image path in `index.html` to use this new JPG file
3. Open `index.html` in your web browser
4. Alternatively, you can use a local server:
   - Python: `python -m http.server 8000`
   - Then visit `http://localhost:8000` in your browser

## Customization

You can easily customize this portfolio by:

1. Updating the personal information in `index.html`
2. Modifying the styles in `style.css`
3. Adding or removing sections as needed
4. Updating the profile photo and certificates

## Browser Compatibility

This portfolio is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## License

This project is available for personal use.

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Placeholder images from placeholder.com (if used)
