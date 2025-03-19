#  💧 Waterfall by Wellflow

![enter image description here](https://cdn.prod.website-files.com/66e09b03023abfe4518e1f2f/67db20278f3466a741b0a032_Screenshot%202025-03-19%20at%203.50.34%E2%80%AFPM.png)

Waterfall is a **Free** and **Open-Source** Slider library for Webflow that allows you to quickly create fully customizable sliders without using Javascript! Waterfall also includes a Webflow App that allows you to modify settings through a UI.

**Why create this?**
Hi! I'm Kevin with Wellflow, and my goal is to provide free features for Webflow Developers. Sliders should be a basic feature for websites in 2025. Unfortunately, Webflow's solution is extremely limited, other free options are limited in customization, and others have stupidly expensive monthly costs. Waterfall is intended to be your FREE, OPEN-SOURCE Slider solution with all the features you need, ALWAYS!

## How Does it Work?

Waterfall uses Attributes as a middleman to initialize SwiperJS. When your site loads, it reads all Attributes on the Waterfall Container and uses them to initialize a SwiperJS swiper. It also looks for elements with special attributes for modules like Navigation, Pagination, Scrollbar, etc. and initializes those for you.

To improve the Developer Experience, the Waterfall App allows you to set these attributes through a Webflow App. The app also cleans default values and only uses attributes specifically set.

The Waterfall app is not yet available in the Webflow App Marketplace. (The developer system is very new and still a lot of work for a solo developer). In order to use Waterfall, you can easily download this package and self-host it for all of your Webflow websites you want to use it for.


## Self-Hosting

### 1. Add the Waterfall Script
Add the Waterfall script to the `</body>` tag on a specific page or the entire site.

    <script src="https://cdn.jsdelivr.net/npm/well-waterfall@1.0.0/dist/waterfall.js"></script>

**Important Note**
Waterfall bundles SwiperJS into the package. If you have SwiperJS included in your site already, you should remove it to prevent duplicate instances.

### 2. Download Waterfall App
On this GitHub page, click `<Code>` and Download ZIP to a location on your development machine and unzip the folder.

Open the folder in a Code Editor like VS Code. Then, open a terminal and `cd` into `waterfall/waterfall-app`.

Before the first time you run the app, run the command `npm install` to install dependencies.

Whenever you want to use the app in the future, just run the command `npm run dev` to start the app.

### 3. Setup and Run Webflow App
Follow the [Webflow tutorial here](https://developers.webflow.com/data/docs/register-an-app) to set up an App for your Workspace or Website. When setting it up, you can use any website for **Homepage URL** since the app is just running locally. Enable **Designer Extension** only, no need for Data client.


## Using the App


### 1. Create a Waterfall Container
Press the first button in the app to create a Waterfall container. All this really is is a `<div>` with attribute `waterfall="NAME"` where `NAME` is a unique identifying string for that Waterfall instance. You can add any class you want to this, the attribute is the only thing needed for functionality.

### 2. Create Waterfall Structure and Add Elements

Nested inside of the Waterfall Container, you will create the traditional SwiperJS structure as either a Collection List if using CMS, or as Elements. The structure should look like the following (shown inside the Waterfall Container):

    <!-- Extra Waterfall Container div wrapping the swiper -->
    <div waterfall="SWIPER_NAME">
	    <div class="swiper">
		    <div class="swiper-wrapper">
			    <!-- Slides -->
			    <div  class="swiper-slide">Slide 1</div>
			    <div  class="swiper-slide">Slide 2</div>
			    <div  class="swiper-slide">Slide 3</div>
			    ...
		    </div>
	    </div>
    </div>

### 3. Create Modules

In the Create View (2nd tab), you can create elements for different modules, like Navigation, Pagination, and Scrollbar. This also basically adds one attribute to a div. For example, a next button is just a Div with attribute `waterfall-el='next'`. Customization of behavior is available in the Edit Panel.

### 4. Customize
The third tab is the Edit Panel, which allows you to use all of the available SwiperJS properties in a User Interface. Settings have been sensibly grouped. For example, Autoplay, Loop, Rewind, and Speed are all available under 'Playback'. The 'Layout' group contains Slides Per View, Grouping, Grid, Spacing, Width, and Height.


## Limitations

A few modules and some variables have been left unimplemented, mostly because in a Webflow context they were either difficult to implement or have little use. If there's a module you'd like to be included, email me at kag@kevingerstner.com. Here is a list of modules not implemented:

 - Manipulation (to be implemented in future version)
 - Parallax (to be implemented in future version)
 - Virtual Slides
 - History Navigation

## Questions?

I spent several months developing this solution for my own Webflow sites. I am a solo dev, so I'm doing my best to maintain the project. If you find any issues or improvements, please contact me at kag@kevingerstner.com or submit a Pull Request. I would love to hear feedback.
