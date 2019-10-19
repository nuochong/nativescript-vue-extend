# nativescript-vue-extend

vscode extension with useful snippets for developing NativeScript-Vue mobile applications.

Based on the **NativeScript XML Snippets** extension, but adapted to the Vue binding and added other snippets not related to the XML templating system.

All snippets are prefixed with `ns`. Attributes do not have a prefix.

## Snippets Components key

### Code Snippets 🔩

- Create a Vue instance - `nsvue`
- HTTP Fetch example - `nsfetch`
- `isIOS` import sentence - `nsisios`
- `isAndroid` import sentence - `nsisandroid`
- NSVue `app` import sentence - `nsapp`
- NSVue `launchEvent` block code - `nslaunchevent`
- NSVue `$navigateTo(Component)` sentence - `nsnavigate`

### UI Components ⚙️

#### Layouts

- Absolute Layout - `nsabsolute`
- Flexbox Layout - `NSflex` - new
- Dock Layout - `nsdock`
- Grid Layout - `nsgrid`
- Stack Layout - `nsstack`
- Wrap Layout - `nswrap`

#### Widgets

- Page - `nspage`
- Action Bar - `nsactionbar`
- Label - `nslabel`
- Text Field - `nstextfield`
- Secure Text Field (for passwords) - `nspassword` - old
- Text View - `nstextview`
- Image - `nsimg`
- Border - `nsborder`
- BottomNavigation - `NSBottomNav` - new
- TabStrip - `NSTabStrip` - new
- TabStripItem - `NSTabStripItem` - new
- TabContentItem - `NSTabContentItem` - new
- Button - `nsbtn`
- Search Bar - `nssearchbar`
- Switch - `nsswitch`
- Slider - `nsslider`
- Progress - `nsprogress`
- Activity Indicator - `nsloading`
- Date Picker - `nsdate`
- Time Picker - `nstime`
- List Picker - `nslistpicker`
- Segmented Bar - `nssegmentedbar`
- Scroll View - `NSscrollview` - new
- Tab View - `nstabview`
- List View - `nslistview`
- Web View - `nswebview`
- Repeater - `NSrepeater` - new
- Password Field - `NSpassword` - new
- Action Item - `NSactionItem` - new

#### Attributes

- icon - `icon`
- textWrap - `wrap`
- horizontalAlignment - `halign`
- verticalAlignment - `valign`
- visibility - `visibility`
- stretch - `stretch`
- keyboardType - `kbtype`

#### Attributes - new

- backgroundColor - `bgColor`
- backgroundImage - `bgImage`
- borderColor - `borderColor`
- borderWidth - `borderWidth`
- translateX - `translateX`
- translateY - `translateY`
- scaleX - `scaleX` - new
- scaleY - `scaleY` - new
- margin - `margin`
- opacity - `opacity`
- style - `style`
- iosOverflowSafeArea - `iosOverflowSafeArea`
- cssClass - `class`
- left - `left`
- right - `right`
- top - `top`
- bottom - `bottom`
- action Bar Hidden - `actionBarHidden`
- Icon - `icon`
- xmlns - `xmlns`
- text - `text`
- colSpan - `colspan`
- rowSpan - `rowspan`
- row - `row`
- col - `col`
- width - `width`
- height - `height`
- itemWidth - `itemWidth`
- itemHeight - `itemHeight`
- colspan - `colspan`
- rowspan - `rowspan`
- dock - `dock`
- stretchLastChild - `stretchLastChild`
- flexDirection - `flexDirection`
- flexWrap - `flexWrap`
- justifyContent - `justifyContent`
- alignItems - `alignItems`
- alignContent - `alignContent`
- order - `order`
- flexGrow - `flexGrow`
- flexShrink - `flexShrink`
- alignSelf - `alignSelf`
- flexWrapBefore - `flexWrapBefore`

#### Gestures Attributes - new

- tap - `tap`
- @tap - `@tap`
- @loaded - `@loaded` - new
- doubleTap - `doubleTap`
- longPress - `longPress`
- pan - `pan`
- pinch - `pinch`
- rotation - `rotation`
- swipe - `swipe`
- touch - `touch`

## How to use?

1. Inside Visual Studio Code press

```bash
CTRL + P
```

2. Type the following in the console window

```bash
ext install nativescript-vue-snippets
```

3. Hit enter.
