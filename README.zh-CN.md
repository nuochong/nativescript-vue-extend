[English](./README.md) | [简体中文](./README.zh-CN.md)

# nativescript-vue-extend

带有有用代码段的 vscode 扩展，用于开发 NativeScript-Vue 移动应用程序。

基于 **NativeScript XML Snippets** 扩展，但适用于 Vue 绑定，并添加了其他与 XML 模板系统无关的代码片段。

所有代码片段均以`ns`作为前缀。 属性没有前缀。

## 片段组件键

### 🔩 代码段

- 创建一个 Vue 实例 - `nsvue`
- HTTP Fetch 示例 - `nsfetch`
- `isIOS` 导入语句 - `nsisios`
- `isAndroid` 导入语句 - `nsisandroid`
- NSVue `app` 导入语句 - `nsapp`
- NSVue `launchEvent` 区块码 - `nslaunchevent`
- NSVue `$navigateTo(Component)` 语句 - `nsnavigate`

### ⚙️ UI 片段

#### 布局

- Absolute 布局 - `nsabsolute`
- Flexbox 布局 - `NSflex` - new
- Dock 布局 - `nsdock`
- Grid 布局 - `nsgrid`
- Stack 布局 - `nsstack`
- Wrap 布局 - `nswrap`

#### 小部件

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

#### 属性

- icon - `icon`
- textWrap - `wrap`
- horizontalAlignment - `halign`
- verticalAlignment - `valign`
- visibility - `visibility`
- stretch - `stretch`
- keyboardType - `kbtype`

#### 属性 - 新

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

#### 手势属性 - 新

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

### 样式片段

#### 🔓 支持的 CSS 属性 - 新

- color - `color` - Sets a solid-color value to the matched view’s foreground.
- background - `background` - Sets a solid-color value or a linear gradient to the matched view’s background.
- background-color - `backgroundColor` - Sets a solid-color value to the matched view’s background.
- placeholder-color - `placeholderColor` - Sets the placeholder (hint) font color to matched views.
- background-image - `backgroundImage` - Sets a image url to the matched view’s background image.
- background-repeat - `backgroundRepeat` - Sets if/how the background image should be repeated. Possible values: repeat, repeat-x, repeat-y, no-repeat
- background-position - `backgroundPosition` - Sets the starting position of the background image. You can set the position with absolute, percent or alignment values. More info here.
- background-size - `backgroundSize` - Sets the size of the background image. Possible values: "length length", "percent% percent%", "cover" or "contain".
- border-color - `borderColor` - Sets border colors to the matched view’s.
- border-top-color - `borderTopColor` - Sets a top border color to the matched view’s.
- border-right-color - `borderRightColor` - Sets a right border color to the matched view’s.
- border-bottom-color - `borderBottomColor` - Sets a bottom border color to the matched view’s.
- border-left-color - `borderLeftColor` - Sets a left border color to the matched view’s.
- border-width - `borderWidth` - Sets border widths to the matched view’s.
- border-top-width - `borderTopWidth` - Sets a top border width to the matched view’s.
- border-right-width - `borderRightWidth` - Sets a right border width to the matched view’s.
- border-bottom-width - `borderBottomWidth` - Sets a bottom border width to the matched view’s.
- border-left-width - `borderLeftWidth` - Sets a left border width to the matched view’s.
- border-radius - `borderRadius` - Sets a border radius to the matched view’s.
- font - `font` - Sets the font properties (this includes font-family, font-size, font-style and font-weight) of the matched view.
- font-family - `fontFamily` - Sets the font family of the matched view.
- font-size - `fontSize` - Sets the font size of the matched view (only supports device-independent units).
- font-style - `fontStyle` - Sets the font style of the matched view. Possible values: italic, normal.
- font-weight - `fontWeight` - Sets the font weight of the matched view Possible values: bold, normal OR 100,200,300,400,500,600,700,800,900, where 400 is normal and 700 is bold (NOTE: Some fonts do not support all available variants)
- text-align - `textAlignment` - Sets text alignment in the matched view. Possible values: left , center, right.
- text-decoration - `textDecoration` - Sets the text formatting. Possible values: none, line-through, underline.
- text-transform - `textTransform` - Sets the text transform. Possible values: none, capitalize, uppercase, lowercase.
- letter-spacing - `letterSpacing` - Sets the text letter spacing. (On Android API Level 21 and above.)
- line-height - `lineHeight` - Sets the text line height
- z-index - `zIndex` - Sets the z-index. (On Android API Level 21 and above.)
- clip-path - `clip-path` - Sets the clip-path. Supported shapes are circle, ellipse, rect and polygon. You can define your own shape using clippy
- vertical-align - `verticalAlignment` - Sets the vertical alignment of the current view within its parent. Possible values: top, center, bottom, stretch.
- horizontal-align - `horizontalAlignment` - Sets the horizontal alignment of the current view within its parent. Possible values: left, center, right, stretch.
- margin - `margin` - Sets the margin of the view within its parent.
- margin-top - `marginTop` - Sets the top margin of the view within its parent.
- margin-right - `marginRight` - Sets the right margin of the view within its parent.
- margin-bottom - `marginBottom` - Sets the bottom margin of the view within its parent.
- margin-left - `marginLeft` - Sets the left margin of the view within its parent.
- width - `width` - Sets the view width.
- height - `height` - Sets the view height.
- min-width - `minWidth` - Sets the minimal view width.
- min-height- `minHeight` - Sets the minimal view height.
- padding - `padding` - Sets the distance between the boundaries of the layout container and its children.
- padding-top - `paddingTop` - Sets the top padding of a layout container.
- padding-right - `paddingRight` - Sets the right padding of a layout container.
- padding-bottom - `paddingBottom` - Sets the bottom padding of a layout container.
- padding-left - `paddingLeft` - Sets the left padding of a layout container.
- visibility - `visibility` - Sets the view visibility. Possible values: visible, collapse (or collapsed).
- opacity - `opacity` - Sets the view opacity. The value is in the [0, 1] range.

#### 🔒 NativeScript 特定的 CSS 属性 - 新

- tab-text-color - `tabTextColor` - Sets the text color of the tabs titles.
- selected-tab-text-color - `selectedTabTextColor` - Sets the color of the text, while selecting some of the tabs.
- tab-background-color - `tabBackgroundColor` - Sets the background color of the tabs.
- tab-text-font-size - `tabTextFontSize` - Sets the tab titles font size, without changing the font size of all contents of the tab.
- text-transform - `textTransform` - Item Sets the text transform individually for every TabViewItem. Value options: capitalize, lowercase, none, and uppercase.
- android-selected-tab-highlight-color - `androidSelectedTabHighlightColor` - Sets the underline color of the tabs in Android.
- android-elevation - `androidElevation` - Sets the elevation of the View in Android.
- android-dynamic-elevation-offset - `androidDynamicElevationOffset` - Sets the elevation of the View in Android, which will be shown when an action was performed(e.g. tap, touch).
- off-background-color - `offBackgroundColor` - Sets the background color of the Switch when it is turned off.
- highlight-color - `highlightColor` - Gets or sets the underline color of the selected TabStripItem.

#### 🔐 根视图 CSS 类 - 新

- `.ns-root` - a default class
- `.ns-android`, `.ns-ios` - classes that specify the application platform
- `.ns-phone`, `.ns-tablet` - classes that specify the device type
- `.ns-portrait`, `.ns-landscape`, `.ns-unknown` - classes that specify the application orientation
- `.ns-modal` - a default CSS class is assigned to the root view of any modal view

## 资源管理器上下文菜单页面创建

右键单击该文件夹，选择“添加 Vue 文件”，然后输入文件名。

## 如何安装?

1. 在 Visual Studio Code 中按下

```bash
CTRL + P
```

2. 在控制台窗口中键入以下内容

```bash
ext install nativescript-vue-extend
```

3. 按回车。
