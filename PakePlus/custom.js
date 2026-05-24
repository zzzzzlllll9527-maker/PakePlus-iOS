window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// ==================== 强力隐藏工具栏 ====================
forceHide
  html = 
    <style>
      .perchance-toolbar, #perchance-header, header, nav, .top-bar, 
      .login-button, .edit-button, .fork-button, .user-menu, 
      .account-button, .perchance-footer, .settings-button {
        display: none !important;
      }
      body, html { margin:0 !important; padding-top:0 !important; }
    </style>

// ==================== 自定义标题栏 ====================
customHeader
  html = 
    <div style="background: linear-gradient(#1a0033, #000); padding: 20px 0; text-align: center; border-bottom: 6px solid #ff2d00;">
      <h1 style="color:#ffb600; margin:0; font-size:42px; text-transform:uppercase;">FULL BODY GENERATOR</h1>
      <p style="color:#ff9999; margin:8px 0 0 0; font-size:21px;">NSFW Enhanced • Unlimited</p>
    </div>
