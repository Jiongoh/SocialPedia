# SocialPedia
社交网站SocialPedia：MERN（MongoDB, Express, React, NodeJs）栈项目，包含前后端。使用了多个技术和库来实习各种功能。前端部分主要使用React、Emotion、Material UI、Redux Toolkit、dotenv、Formik、React Dropzone等技术和库

[在线测试](http://123.249.18.208/)

## 网站主要功能描述
采用响应式设计的原则，通过使用媒体查询和弹性布局等技术，使得网站能够适应不同的屏幕尺寸和设备类型。还为网站添加了明亮和暗黑模式的功能，用户可以一键切换网站的整体配色。此外用户还可以注册和登陆，通过安全的身份验证机制进行访问。登陆后，用户可以创建个人资料，包括个人信息，头像等。用户可以发表帖子，并于其他用户互动，包括点赞帖子，评论帖子等。用户还可以添加其他人为好友，好友列表会实时更新。

### 前端介绍
前端部分使用React来构建用户界面，Emotion用于处理CSS样式，Material UI提供了一套美观和可定制的组件库。Redux Toolkit 用于状态管理，帮助管理全局状态并实现可预测性的状态更新。通过 Formik，可以方便地创建和验证表单。React Dropzone 用于实现文件上传功能，让用户可以分享图片和多媒体内容。

### 后端介绍
后端部分基于 Node.js 和 MongoDB，使用了 bcryptjs、body-parser、cors、dotenv、express、jsonwebtoken、mongoose、multer 等技术和库。采用了安全的密码哈希和验证机制，通过 JSON Web Tokens 实现身份认证和授权。使用 mongoose 作为对象模型工具，与 MongoDB 进行交互。multer 用于处理用户上传的文件。
