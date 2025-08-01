# Ahmadrka's Personal Webpage
Simple, modern and lightweight personal webpage, with high performance and accessibility, using pure HTML, CSS and Javascript.

## Technology
### Built with
- [HTML5](https://www.google.com/search?q=html5)
- [CSS3](https://www.google.com/search?q=css3)
- [Javascript](https://javascript.com/)

### Libraries
- [EmailJS](https:/emailjs.com)


## Sections
- Responsive and Dynamic Navigation Bar:
	- Hamburg button to open slide menu bar
	- Dynamic theme button
	- Sticky position when on top
	- Less buttons on mobile
- Slide Menu Bar:
	- More buttons and close button
	- List of navigation button
	- Option for theme and background customization
	- Language selector list
- Resume Screen:
	- Close button, download button, print button, open directly button
	- Embedded PDF screen with [Google Docs](https://docs.google.com/)
	- Click `View Resume` button to display resume screen
- Home Section: Simple welcome text and image with minimalism design
- About Section:
	- Profile picture and brief personal introduction
	- Status (working or available)
	- Expertise and skill
- Project Section: Showing featured project with responsive card
- Contact Section: Responsive contact and social media list
- Form Section:
	- Interactive form with [EmailJS](https:/emailjs.com)
	- Form validation and error notification
	- Successful display information
- Footer:
	- Web icon and description 
	- Additional links


## Features
### Internationalization Feature
- Device language for default option
- Supported languages:
	- EN : English (US)
	- ID : Indonesia
	- OID : Indonesia (Tempoe Doeloe)
	- JV : Jawa (Krama Alus)
	- SU : Sunda

### Style Features
- Custom favicon
- Responsive layout across all device:
	- Desktop >1300px display width
	- Tablet <1300px display width
	- Mobile <767px display width
- Translucent container background:
	- Backdrop filter for gaussian blur
	- Background opacity for transparent effect
	- Box shadow for hover effect
- Interactive button and input form with hover effect

### Theme Features
- Adaptive theme with light and dark mode for default
- Theme button for change theme manually
- Theme button icon change when theme change
- Dynamic button color and icon
- Use local storage for store preferences

### Customization Feature
- Change background with custom color (HTML5 color picker) <input type="color">
- Change background with custom image (max. 5MB file size) <input type="file">

### Behavior Features
- Use smooth scroll behavior
- Scroll snap for desktop
- Navigation sticky position when on top
- Transition effect for navigation, menu, button, etc

### Optimization
- Images used compresed [.webp](https://www.google.com/search?q=.webp) extension for data efficiency
- Button icon used embedded [svg tag](https://www.google.com/search?q=svg%20tag)

### Other Features
- Error 404 Page, see demo [here](https://ahmadrka.com/not-found.html)
- Meta Open Graph Image Preview & Description
- Error notification for custom background image size above 5MB


## Assets
### Images
- Home: Ahmadrka's 3D Render with [Blender](https://blender.org/)
- About: Ahmadrka's personal profile image

### Fonts
- Main font: Outfit Medium
- Fallback font: Arial

### Color Scheme
#### Default Light Theme
- Body: <span style="background-color: #add0ff">Baby blue</span> `#add0ff`
- Content: <span style="background-color: #ffffff80">Semi white</span> `#ffffff80`
- Button: <span style="background-color: #00abff">Azure</span> `#00abff`
- Text: <span style="background-color: #363636">Dark grey</span> `#363636`
- Hover: <span style="background-color: #ffffffba">Semi White</span> `#ffffffba`
- Error : <span style="background-color: #ff3434">Red orange</span> `#ff3434`
#### Default Dark Theme
- Body: <span style="background-color: #050120">Black Russian</span> `#050120`
- Content: <span style="background-color: #35354580">Semi tuna</span> `#35354580`
- Button: <span style="background-color: #113388">Lapis blue</span> `#113388`
- Text: <span style="background-color: #fff">White</span> `#fff`
- Hover: <span style="background-color: #3f3f4fba">Semi bright grey</span> `#3f3f4fba`
- Error : <span style="background-color: #aa3434">Pale carmine</span> `#aa3434`


## Deployment
### Deployment Demo
**You can see live demo in here**<br>
**👉 https://ahmadrka.com 👈**<br>
Hosted on [Netlify](https://netlify.com)

### Deployment Setup
1. Clone or download [this repository](https://github.com/Ahmad-Arkan/ahmadrka).<br>
	`git clone https://github.com/Ahmad-Arkan/ahmadrka`
2. Change EmailJS Public Key on `index.html`. You can watch [this video](https://youtu.be/BgVjild0C9A) for tutorial.
3. Open `index.html` or run live server. You can also deploy to [Vercel](https://vercel.com/), [Netlify](https://netlify.com), or other deployment platform.
	<br>(**caution:** internationalization feature would'nt work without server)
4. Check your website, make sure to point the directory to the same directory as `index.html` and use the same port as the live server.
5. Congrats, now you running this website.