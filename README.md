# Kurulum Aşaması
Tailwind.CSS kurulum aşaması npm ile ve node.js ile bu adımlar uygulandı. <br>
1. npm install -D tailwindcss
2. npx tailwindcss init
3. src adında klasör oluşturuldu (bu klasör ismi size göre değişebilir)
4. Ben kendim özel klasör ismi oluşturup buna göre oluşturdum.(Aynı ismi kullanmak zorunlu değil) [Tailwind Installation Docs](https://tailwindcss.com/docs/installation) 

# Class yapısı 
```html
<header class="w-full">
    
</header>
```
<br>

# Özel Stil Verme

Bu projede Tailwind.CSS `src` klasörü (ismi değiştirilebilir) içindeki `input.css`, `body` özelliğine değişiklik yapıldı.

```css
body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
``` 
<br>

# Tailwind Docs Kullanılabilirlik
Tailwind.CSS framework'te kullanılan class isimleri bulma kolaylığı. Class isimleri bulmak kolay. Site karışık değil.


# Custom Class Added
`tailwind.config.js` dosyasına eklenen bazı stiller ve kullanımı <br>
```javascript
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'button-colors-text':"#007bff",
        'link-colors':"#343a40",
      }
    },
  },
  plugins: [],
}
```
<br>

### **Örnek Kullanım** 
<br>

```html
<li class="p-2 text-link-colors"><a href="#">Features</a></li>
```