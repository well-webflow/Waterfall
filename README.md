[![npm version](https://badge.fury.io/js/angular2-expandable-list.svg)](https://badge.fury.io/js/angular2-expandable-list) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

# 🚿 Waterfall by Wellflow 🚿

Waterfall is a single-line of code for Webflow that enables developers to use attributes to quickly build sliders based on SwiperJS. This library is a basically an attribute wrapper for SwiperJS 11.2.10 (2025-06-28).

While other slider options are paid, Waterfall will always be a free solution (until Webflow implements a better native slider option).

## Table of contents

- [Waterfall](#project-name)
  - [Table of contents](#table-of-contents)
  - [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Serving the app](#serving-the-app)
    - [Running the tests](#running-the-tests)
    - [Building a distribution version](#building-a-distribution-version)
    - [Serving the distribution version](#serving-the-distribution-version)
  - [API](#api)
    - [useBasicFetch](#usebasicfetch)
      - [Options](#options)
    - [fetchData](#fetchdata)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Built With](#built-with)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

## Installation

Add the code to the Footer Code (after the `</body>` tag) in the Webflow Project Settings.

**Latest Version**

```
<script src="https://cdn.jsdelivr.net/npm/well-waterfall@0.0.5/dist/waterfall.js?"></script>
```

**Specific (Stable) Version**

```
<script src="https://cdn.jsdelivr.net/npm/well-waterfall@0.0.5/dist/waterfall.js?"></script>
```

## Usage

### Add the Waterfall Layout

If you're familiar with SwiperJS, you'll notice that this is the same layout found in the documentation with one added div wrapper with the attribute `[waterfall="SWIPER_NAME"]` where `SWIPER_NAME` is a unique identifying string for that swiper.

```
<!-- Slider main container -->
<div waterfall="SWIPER_NAME">
    <div class="swiper">
      <!-- Additional required wrapper -->
      <div  class="swiper-wrapper">
        <!-- Slides -->
        <div  class="swiper-slide">Slide 1</div>
        <div  class="swiper-slide">Slide 2</div>
        <div  class="swiper-slide">Slide 3</div>
        ...
      </div>
    </div>
</div>
```

All slider settings will be added as attributes to the element with the [waterfall] attribute. For example, to add navigation, `[navigationMode="true"]` will be added to the attributes of the .swiper element above.

## General Settings

| attributeName | description                                                                  | type    | default |
| ------------- | ---------------------------------------------------------------------------- | ------- | ------- |
| debugMode     | when `true`, prints out debug statements to the console to help find errors. | boolean | false   |

## Navigation

Navigation allows for buttons to control moving to previous or next slides. To enable navigation, add the attribute `[navigationMode="true"]`.
Add `[waterfall-el='next']` to an element used to advance to the next slide and `[waterfall-el='prev']` to an element used to rewind to the previous slide.

**Navigation Settings**

NYI (Not Yet Implemented)

## Autoplay

Autoplay advances the slider automatically. To enable autoplay, add the attribute `[autoplayMode="true"]`.

**Autoplay Settings (COMPLETE)**
|attributeName|description|type|default
|--|--|--|--|
|delay|Delay between transitions (in ms). If this parameter is not specified, auto play will be disabled|number|0|
|disableOnInteraction|Set to `false` and autoplay will not be disabled after user interactions (swipes), it will be restarted every time after interaction|number|0|
|pauseOnMouseEnter|When enabled autoplay will be paused on pointer (mouse) enter over Swiper container|boolean|false
|reverseDirection|Enables autoplay in reverse direction|boolean|false
|stopOnLastSlide|Enable this parameter and autoplay will be stopped when it reaches last slide (has no effect in loop mode)|boolean|false|
|waitForTransition|NOT IMPLEMENTED|-|-|

## Pagination

Pagination are a list of markers (dots, squares, numbers) that display the current slide. To enable pagination, add the attribute [paginationMode="true"] to the global settings.

Next, add `[waterfall-el="pagination"]` to the wrapper containing the pagination.

Then, add `[waterfall-el="pagination-bullet"]` to the element used as the bullet for the pagination. Also add `[waterfall-pagination-active-class=ACTIVE_CLASS_NAME]` so that the active bullet gets the correct class.

**Pagination Settings (IN PROGRESS)**

| attributeName     | description                                                               | type   | default                           |
| ----------------- | ------------------------------------------------------------------------- | ------ | --------------------------------- |
| bulletActiveClass | CSS class name of currently active pagination bullet                      | string | 'swiper-pagination-bullet-active' |
| el                | String with CSS selector or HTML element of the container with pagination | any    | null                              |

clickable: parseBool(getAttrOrDefault($this, "paginationClickable", true)),

type: "bullets",

dynamicBullets: false,

## Scrollbar

To add a scrollbar, first set `[scrollbar-mode='true']`.

Add `[waterfall-el='scrollbar']` to the scrollbar element (the full scrollbar) and add `[waterfall-el='scrollbar-drag']` to the draggable area of the scrollbar.

**Scrollbar Settings (COMPLETE)**

| attributeName            | description                                                                                             | type    | default                       |
| ------------------------ | ------------------------------------------------------------------------------------------------------- | ------- | ----------------------------- |
| dragSize                 | Size of scrollbar draggable element in px                                                               | number  | 'auto'                        |
| draggable                | Set to `true` to enable make scrollbar draggable that allows you to control slider position             | boolean | false                         |
| scrollbarEnabled         | Boolean property to use with breakpoints to enable/disable scrollbar on certain breakpoints             | boolean | true                          |
| scrollbarHide            | Hide scrollbar automatically after user interaction                                                     | boolean | false                         |
| scrollbarHorizontalClass | CSS class name set to scrollbar in horizontal Swiper                                                    | string  | "swiper-scrollbar-horizontal" |
| scrollbarLockClass       | Scrollbar element additional CSS class when it is disabled                                              | string  | "swiper-scrollbar-lock"       |
| scrollbarDisabledClass   | CSS class name added on swiper container and scrollbar element when scrollbar is disabled by breakpoint | string  | "swiper-scrollbar-disabled"   |
| snapOnRelease            | Set to `true` to snap slider position to slides when you release scrollbar                              | boolean | false                         |
| scrollbarVerticalClass   | CSS class name set to scrollbar in vertical Swiper                                                      | string  | "swiper-scrollbar-vertical"   |

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

1.  Fork it!
2.  Create your feature branch: `git checkout -b my-new-feature`
3.  Add your changes: `git add .`
4.  Commit your changes: `git commit -am 'Add some feature'`
5.  Push to the branch: `git push origin my-new-feature`
6.  Submit a pull request :sunglasses:

## Credits

TODO: Write credits

## Built With

- Dropwizard - Bla bla bla
- Maven - Maybe
- Atom - ergaerga
- Love

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

- **John Doe** - _Initial work_ - [JohnDoe](https://github.com/JohnDoe)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

[MIT License](https://andreasonny.mit-license.org/2019) © Andrea SonnY
