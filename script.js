const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error(input, message) {
  input.className = "form-control is-invalid";
  const div = input.nextElementSibling;
  div.innerText = message;
  div.className = "invalid-feedback";
}

function success(input) {
  input.className = "form-control is-valid";
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (username.value === "") {
    error(username, "username gerekli");
  } else {
    success(username);
  }

  if (email.value === "") {
    error(email, "email gerekli");
  } else if (!validateEmail(email.value)) {
    error(email, "düzgün bir mail adresi giriniz");
  } else {
    success(email);
  }

  if (password.value === "") {
    error(password, "password gerekli");
  } else {
    success(password);
  }

  if (repassword.value === "") {
    error(repassword, "repassword gerekli");
  } else {
    success(repassword);
  }
});

/*
1-6:HTML inputlarına ulaşmaya çalıştık
7.satır: Buradaki fonksiyonumuzun işlevini şu şekilde açıklayabiliriz inputa bir değer girilmemiş ise bize bootstrap kütüphanesinde kullandığımız class isimleri geri dönüş yapıyor.
         Daha net bir şekilde anlayabilmek için 27.satırı inceleyelim. İf yapısında yazdığımız koşul gerçekleşirse yani inputumuz boş bırakılır ise kullanıcıya error fonksiyonu aracılığı bu alanın doldurulması gerektiğini söylüyor.
         error(input, message) buradaki input ve message değişkenleri kafanızı karıştırmasın. Fonksiyonu çalıştırmak istediğimiz bölümde input ve message değerlerini biz gönderiyoruz. 28.satırda yazdığımız error(username, "username gerekli") seklinde kullanıyoruz.
         https://www.webcebir.com/156-javascript-fonksiyon-kullanimi-dersi.html fonksiyon yapısını anlamak için bu sayfaya bakabilirsiniz.
9.satır: 'nextElementSibling' sonraki Element nesnesini döndürür. Daha net bir şekilde anlayabilmek için html kodlarına bakalım. Html kısmında her inputtan sonra bir div boş bırakılmış. 'nextElementSibling' ile bu div e ulaşıyoruz.    
10.satır: innerText özelliği ile kullanıcıya 9.satırda ulaştığımız div içerinde mesaj gönderiyoruz. 
14.satır: Buraki fonksiyonumuz da input girişi yapıldığında çalışıyor yani if else yapısında belirttiğimiz şartımız sağlanmadığında bu fonksiyonumuzu çağırıyoruz. 
          Örnek üzerinden açıklayacak olursak 41.satırdaki if else yapımızda if içindeki koşulumuz sağlanmazsa yani password girişi yapılmışsa if çalışmaz bir sonraki satırda bulunan else içine yazdığımız fonksiyonumuz çalışır.
18.satır: Bu satırdaki fonksiyonumuz e mail in belli özelliklere sahip olup olmadığını kontrol ediyor. Buradaki kodları ezberlemek zorunda değilsiniz stackoverflow sitesinden ulaşabilirsiniz.     
24.satır: element.addEventListener(event, fonksiyon, useCapture)
            event: olay türüdür('click' veya 'mousedown' gibi)
            NOT: 'on' önekini kullanmayın.Örneğin 'onclick' yerine 'click' kullanın.
            Fonksiyon: Olay tetiklendikten sonra çağrılan işlevdir.
            useCapture: Boolean değeridir. Bu parametre isteğe bağlıdır ve pek kullanılmaz. 
        function(e) event olayının referansıdır yani event objesine ulaşmış oluyoruz.
25.satır: Formun varsayılan özelliğini kapatmış olduk. Submit butonuna her bastığımızda sayfa yenileniyor bu satırdaki kod aracılığı ile bu özelliği kapattık.
ÖNEMLİ: '==' girilen değerin eşitliğini sorgular.
         '===' girilen değerin hem eşitliğini hem de tipini sorgular.
27.satır: Buradaki if else yapısı ile username inputune girilen değerin boş olup olmadığını sorguluyoruz. Yani input boş ise error fonksiyonu aracılığı ile bu alanın doldurulması gerektiğini kullanıcıya bildiriyor.
33.satır: Yine aynı şekilde email inputunun boş olup olmadığını kontrol ediyoruz. Else if kısmındaki !validateEmail bu ifademizin anlamı validateEmail in doğru olmadığı yani 18.satırda yazdığımız fonksiyon şartının sağlanmadığı durumlarda buradaki yapımız true döner.
*/
// if else yapısını bu kadar çok kullanmamız düzgün kod yazmadığımız anlamını taşır. Bu form kısmının toparlanmış bir halini paylaşacağım. İsterseniz önce buradaki kodları inceleyip anlamaya çalışın ardından diğer toparlanmış halini inceleyin. Çünkü buradaki temel halini anlamınız diğer toparlanmış halini anlamanız açısından kolaylık sağlar ve eklenmesi gereken karakter kuralları da var bunlar da bir sonraki paylaşımımda eklenmiş olacak..
