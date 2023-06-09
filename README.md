# Kurulum Aşaması
Tailwind.CSS kurulum aşaması npm ile ve node.js ile bu adımlar uygulandı. <br>
1. ```npm install -D tailwindcss ```
2. ```npx tailwindcss init```

3. src adında klasör oluşturuldu (bu klasör ismi size göre değişebilir)
4. Ben kendim özel klasör ismi oluşturup buna göre oluşturdum.(Aynı ismi kullanmak zorunlu değil) [Tailwind Installation Docs](https://tailwindcss.com/docs/installation) 

<br>

# Class yapısı 
```html
<header class="w-full bg-teal-400 text-xl font-medium">
    
</header>
```
<br>

# Custom Class Added

Bu projede Tailwind.CSS `src` klasörü (ismi değiştirilebilir) içindeki `input.css`, `.card` adlı `class` özelliğini ekledik.

```css
.card {
    background-color: #fff;
    border: 1px solid rgba(0,0,0,.125);
    border-radius: 0.25rem;
}
``` 
<br>

# Tailwind Docs Kullanılabilirlik
Tailwind.CSS framework'te kullanılan class isimleri bulma kolaylığı. CSS özelliklerini aratıp Tailwind.CSS için nasıl kullanılması gerektiğini gösteriyor. Aradığınız özelliği bulmak zor değil.

<br>

# Özel Stil Verme ve Ekleme
`tailwind.config.js` dosyasına kendimiz eklediğmiz özel `css class` stiller ve kullanımı.  <br>

**Bkz :** &nbsp; https://tailwindcss.com/docs/adding-custom-styles <br>
<br>

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

<!-- tailwind.config.js adlı dosyaya kendimiz özel yazı rengi kullanmak istediğimiz class ismi ve renk kodunu oluşturduk. Bunu kullanırken sorun yaşamadık. -->
```

<br>

# Responsive Mobile First Yaklaşımı
320px için sorun yaşadım. Kendimiz yeni çözünürlük ekleyerek çözebiliyoruz. Bu durum bootstrap kıyasla can sıkıcı. :worried: