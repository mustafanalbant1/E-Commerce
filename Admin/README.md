
# E-Commerce Project

Bu proje, bir e-ticaret uygulaması olarak tasarlanmıştır. Kullanıcılar ürünleri görüntüleyebilir, sepete ekleyebilir ve satın alabilirler. Proje, React.js ve Node.js kullanılarak geliştirilmiştir.

## Özellikler

- Ürünleri görüntüleme
- Ürünleri sepete ekleme ve çıkarma
- Kullanıcı kaydı ve girişi
- Ürün kategorileri
- Yönetim paneli ile ürün yönetimi
- Responsive tasarım

## Teknolojiler

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js, MongoDB
- **Diğer**: JWT (JSON Web Token) ile kimlik doğrulama

## Proje Yapısı

```
E-Commerce/
│
├── frontend/  # Kullanıcı arayüzü
│   ├── src/
│   ├── public/
│   └── README.md
│
├── backend/  # Sunucu tarafı
│   ├── src/
│   └── README.md
│
└── admin/  # Yönetim paneli
    ├── src/
    └── README.md
```

## Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- MongoDB

### Projeyi Klonlama

Proje dosyalarını bilgisayarınıza klonlamak için aşağıdaki komutu kullanın:

```bash
git clone https://github.com/kullaniciadi/e-commerce-project.git
cd e-commerce-project
```

### Backend Kurulumu

1. **Backend dizinine gidin**:

   ```bash
   cd backend
   ```

2. **Gerekli bağımlılıkları yükleyin**:

   ```bash
   npm install
   ```

3. **.env dosyasını oluşturun** ve gerekli ortam değişkenlerini ayarlayın:

   ```plaintext
   MONGO_URI=mongodb://<kullanici>:<sifre>@localhost:27017/<veritabani>
   JWT_SECRET=your_jwt_secret
   PORT=5001
   ```

4. **Sunucuyu başlatın**:

   ```bash
   node index.js
   ```

### Frontend Kurulumu

1. **Frontend dizinine gidin**:

   ```bash
   cd frontend
   ```

2. **Gerekli bağımlılıkları yükleyin**:

   ```bash
   npm install
   ```

3. **Uygulamayı başlatın**:

   ```bash
   npm run dev
   ```

### Admin Kurulumu

1. **Admin dizinine gidin**:

   ```bash
   cd admin
   ```

2. **Gerekli bağımlılıkları yükleyin**:

   ```bash
   npm install
   ```

3. **Uygulamayı başlatın**:

   ```bash
   npm run dev
   ```

## Kullanım

- Uygulamayı başlattıktan sonra, tarayıcınızda `http://localhost:5170` adresine gidin.
- Kullanıcı kaydı oluşturun veya mevcut bir kullanıcı ile giriş yapın.
- Ürünleri görüntüleyin ve sepete ekleyin.
- Yönetim paneline erişmek için `http://localhost:5170/admin` adresine gidin.

## Katkıda Bulunma

Bu projeye katkıda bulunmak isterseniz, lütfen bir pull request oluşturun veya sorunları bildirin.

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için [LICENSE](LICENSE) dosyasını kontrol edin.
