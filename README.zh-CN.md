[English](./README.md) | [简体中文](./README.zh-CN.md)

# nativescript-vue-extend

带有有用代码段的 vscode 扩展，用于开发 NativeScript-Vue 移动应用程序。

基于 **NativeScript XML Snippets** 扩展，但适用于 Vue 绑定，并添加了其他与 XML 模板系统无关的代码片段。

所有代码片段均以`ns`作为前缀。 属性没有前缀。

## 片段组件键

### 🔩 代码段

- `nsvue` - 创建一个 Vue 实例
- `nsfetch` - HTTP Fetch 示例
- `nsisios` - `isIOS` 导入语句
- `nsisandroid` - `isAndroid` 导入语句
- `nsapp` - NSVue `app` 导入语句
- `nslaunchevent` - NSVue `launchEvent` 区块码
- `nsnavigate` - NSVue `$navigateTo(Component)` 语句

### ⚙️ UI 片段

#### 布局

- Absolute 布局 - `nsabsolute`
- Flexbox 布局 - `nsflex` - 新
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
- BottomNavigation - `nsbottomnav` - 新
- TabStrip - `nstabstrip` - 新
- TabStripItem - `nstabstripitem` - 新
- TabContentItem - `nstabcontentitem` - 新
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
- Scroll View - `nsscrollview` - 新
- Tab View - `nstabview`
- List View - `nslistview`
- Web View - `nswebview`
- Repeater - `nsrepeater` - 新
- Password Field - `nspassword` - 新
- Action Item - `nsactionitem` - 新

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
- scaleX - `scaleX` - 新
- scaleY - `scaleY` - 新
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
- @loaded - `@loaded` - 新
- doubleTap - `doubleTap`
- longPress - `longPress`
- pan - `pan`
- pinch - `pinch`
- rotation - `rotation`
- swipe - `swipe`
- touch - `touch`

### 样式片段

#### 🔓 支持的 CSS 属性 - 新

- color - `color` - 将单色值设置为匹配视图的前景。
- background - `background` - 为匹配视图的背景设置纯色值或线性渐变。
- background-color - `backgroundColor` - 为匹配视图的背景设置纯色值。
- placeholder-color - `placeholderColor` - 将占位符（提示）字体颜色设置为匹配的视图。
- background-image - `backgroundImage` - 将图片网址设置为匹配视图的背景图片。
- background-repeat - `backgroundRepeat` - 设置是否/如何重复背景图像。 可能的值：repeat，repeat-x，repeat-y，no-repeat。
- background-position - `backgroundPosition` - 设置背景图像的起始位置。 您可以使用绝对值，百分比或对齐值设置位置。 更多信息在这里。
- background-size - `backgroundSize` - 设置背景图像的尺寸。 可能的值："length length", "percent% percent%", "cover" 或者 "contain"。
- border-color - `borderColor` - 将边框颜色设置为匹配视图的颜色。
- border-top-color - `borderTopColor` - 为匹配的视图设置顶部边框颜色。
- border-right-color - `borderRightColor` - 为匹配的视图设置右边框颜色。
- border-bottom-color - `borderBottomColor` - 将底部边框颜色设置为匹配视图的颜色。
- border-left-color - `borderLeftColor` - 将左边框颜色设置为匹配视图的颜色。
- border-width - `borderWidth` - 将边框宽度设置为匹配视图的宽度。
- border-top-width - `borderTopWidth` - 将顶部边框宽度设置为匹配视图的宽度。
- border-right-width - `borderRightWidth` - 为匹配的视图设置右边框宽度。
- border-bottom-width - `borderBottomWidth` - 将底部边框宽度设置为匹配视图的宽度。
- border-left-width - `borderLeftWidth` - 将左边框宽度设置为匹配视图的宽度。
- border-radius - `borderRadius` - 将边框半径设置为匹配视图的边框。
- font - `font` - 设置匹配视图的字体属性（包括字体系列，字体大小，字体样式和字体粗细）。
- font-family - `fontFamily` - 设置匹配视图的字体系列。
- font-size - `fontSize` - 设置匹配视图的字体大小（仅支持与设备无关的单元）。
- font-style - `fontStyle` - 设置匹配视图的字体样式。 可能的值：斜体，正常。
- font-weight - `fontWeight` - 设置匹配视图的字体粗细可能的值：粗体，普通或 100,200,300,400,500,600,700,800,900，其中 400 为普通，700 为粗体（注意：某些字体不支持所有可用的变体）。
- text-align - `textAlignment` - 在匹配的视图中设置文本对齐方式。 可能的值：left，center，right。
- text-decoration - `textDecoration` - 设置文本格式。 可能的值：无，直通，下划线。
- text-transform - `textTransform` - 设置文本转换。 可能的值：无，大写，大写，小写。
- letter-spacing - `letterSpacing` - 设置文本字母间距（在 Android API 级别 21 及更高版本上）。
- line-height - `lineHeight` - 设置文字行高。
- z-index - `zIndex` - 设置 z-index（在 Android API 级别 21 及更高版本上）。
- clip-path - `clip-path` - 设置剪切路径。 支持的形状是圆形，椭圆形，矩形和多边形。 您可以使用 clippy 定义自己的形状。
- vertical-align - `verticalAlignment` - 设置当前视图在其父视图中的垂直对齐方式。 可能的值：上，中，下，拉伸。
- horizontal-align - `horizontalAlignment` - 设置当前视图在其父视图中的水平对齐方式。 可能的值：左，中，右，拉伸。
- margin - `margin` - 在其父级中设置视图的边距。
- margin-top - `marginTop` - 设置其父视图内的上边距。
- margin-right - `marginRight` - 设置视图在其父视图中的右边距。
- margin-bottom - `marginBottom` - 设置视图在其父视图中的底边距。
- margin-left - `marginLeft` - 设置视图在其父视图中的左边界。
- width - `width` - 设置视图宽度。
- height - `height` - 设置视图高度。
- min-width - `minWidth` - 设置最小视图宽度。
- min-height- `minHeight` - 设置最小视图高度。
- padding - `padding` - 设置布局容器及其子项的边界之间的距离。
- padding-top - `paddingTop` - 设置布局容器的顶部填充。
- padding-right - `paddingRight` - 设置布局容器的正确填充。
- padding-bottom - `paddingBottom` - 设置布局容器的底部填充。
- padding-left - `paddingLeft` - 设置布局容器的左填充。
- visibility - `visibility` - 设置视图可见性。 可能的值：可见，折叠（或折叠）。
- opacity - `opacity` - 设置视图不透明度。 该值在[0，1]范围内。

#### 🔒 NativeScript 特定的 CSS 属性 - 新

- tab-text-color - `tabTextColor` - 设置标签标题的文本颜色。
- selected-tab-text-color - `selectedTabTextColor` - 选择某些选项卡时，设置文本的颜色。
- tab-background-color - `tabBackgroundColor` - 设置选项卡的背景色。
- tab-text-font-size - `tabTextFontSize` - 设置选项卡标题的字体大小，而不更改选项卡所有内容的字体大小。
- text-transform - `textTransform` - 项目为每个 TabViewItem 分别设置文本转换。 值选项：大写，小写，无和大写。
- android-selected-tab-highlight-color - `androidSelectedTabHighlightColor` - 设置 Android 中标签的下划线颜色。
- android-elevation - `androidElevation` - 设置 Android 中视图的高程。
- android-dynamic-elevation-offset - `androidDynamicElevationOffset` - 设置 Android 中视图的高程，将在执行某项操作（例如点击，触摸）时显示。
- off-background-color - `offBackgroundColor` - 设置开关关闭时的背景色。
- highlight-color - `highlightColor` - 获取或设置所选 TabStripItem 的下划线颜色。

#### 🔐 根视图 CSS 类 - 新

- `.ns-root` - 默认类。
- `.ns-android`, `.ns-ios` - 指定应用程序平台的类。
- `.ns-phone`, `.ns-tablet` - 指定设备类型的类。
- `.ns-portrait`, `.ns-landscape`, `.ns-unknown` - 指定应用程序方向的类。
- `.ns-modal` - 默认 CSS 类分配给任何模式视图的根视图。

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
