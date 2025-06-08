import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'İtalyan Mutfağı', '#f5428d'),
  new Category('c2', 'Hızlı ve Basit', '#f54242'),
  new Category('c3', 'Hamburgerler', '#f5a442'),
  new Category('c4', 'Alman Mutfağı', '#f5d142'),
  new Category('c5', 'Hafif ve Hoş', '#368dff'),
  new Category('c6', 'Egzotik', '#41d95d'),
  new Category('c7', 'Kahvaltı', '#9eecff'),
  new Category('c8', 'Asya Mutfağı', '#b9ffb0'),
  new Category('c9', 'Fransız Mutfağı', '#ffc7ff'),
  new Category('c10', 'Yaz', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Domates Soslu Spagetti',
    'ekonomik',
    'basit',
    'https://cdn.yemek.com/mnresize/1250/833/uploads/2021/09/sutas-kabak-salatasi-site.jpg',
    20,
    [
      '4 Domates',
      '1 Yemek Kaşığı Zeytinyağı',
      '1 Soğan',
      '250g Spagetti',
      'Baharat',
      'Peynir (opsiyonel)'
    ],
    [
      'Domatesleri ve soğanı küçük parçalar halinde kesin.',
      'Biraz su kaynatın, kaynayınca tuz ekleyin.',
      'Spagettiyi kaynar suya koyun; bu işlem yaklaşık 10 ila 12 dakika içinde yapılmalıdır.',
      'Bu arada biraz zeytinyağını ısıtıp doğranmış soğanı ekleyin.',
      '2 dakika sonra domates parçalarını, tuzu, karabiberi ve diğer baharatlarınızı ekleyin.',
      'Spagetti piştikten sonra sos hazır olacaktır.',
      'Bitmiş yemeğin üzerine biraz peynir eklemekten çekinmeyin.'
    ],
  ),

  new Meal(
    'm2',
    ['c2'],
    'Tost Hawaii',
    'ekonomik',
    'basit',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Dilim Beyaz Ekmek',
      '1 Dilim Jambon',
      '1 Dilim Ananas',
      '1-2 Dilim Peynir',
      'Tereyağı'
    ],
    [
      'Beyaz ekmeğin bir tarafını yağlayın',
      'Beyaz ekmeğin üzerine jambon, ananas ve peyniri katlayın',
      'Tostu 200°C sıcaklıktaki fırında yaklaşık 10 dakika pişirin.'
    ],
  ),

  new Meal(
    'm3',
    ['c3'],
    'Klasik Hamburger',
    'pahalı',
    'basit',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      "300g Sığır Hack'i",
      '1 Domates',
      '1 Salatalık',
      '1 Soğan',
      'Ketçap',
      '2 Burger Çöreği'
    ],
    [
      '2 köfte oluşturun',
      'Köfteleri her iki tarafta 4 dakika kadar kızartın.',
      'Çörekleri hızla her iki tarafta 1 dakika kadar kızartın',
      'Ketçaplı Bruch çörekler',
      'Burgeri domates, salatalık ve soğanla servis edin'
    ],
  ),

  new Meal(
    'm4',
    ['c4'],
    'Şinitzel',
    'lüks',
    'zorlu',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Dana Köfte',
      '4 yumurta',
      '200g Ekmek Kırıntısı',
      '100g Un',
      '300ml Tereyağı',
      '100g Bitkisel Yağ',
      'Tuz',
      'Limon dilimleri'
    ],
    [
      'Dana etini yaklaşık 2–4 mm kadar yumuşatın ve her iki tarafını da tuzlayın.',
      'Yumurtaları düz bir tabakta çatalla kısa süre karıştırın.',
      'Köfteleri hafifçe una bulayın, ardından yumurtaya batırın ve son olarak galeta ununa bulayın.',
      'Tereyağı ve yağı geniş bir tavada ısıtın (yağın çok ısınmasını bekleyin) ve şnitzelleri her iki tarafı da altın rengi kahverengi olana kadar kızartın.',
      "Şnitzellerin yağla çevrelenmesi ve ufalanan parçaların 'kabarık' hale gelmesi için tavayı düzenli olarak attığınızdan emin olun.",
      'Çıkarın ve mutfak kağıdına boşaltın. Maydanozu kalan yağda kızartıp süzün.',
      'Şnitzelleri ısıtılmış tabağa yerleştirin ve maydanoz ve limon dilimleriyle süsleyerek servis yapın.'
    ],
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Füme Somon Salatası',
    'lüks',
    'basit',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Roka',
      "Kuzu Marulu",
      'Maydanoz',
      'Rezene',
      '200g Somon Füme',
      'Hardal',
      'Balzamik sirke',
      'Zeytin yağı',
      'Tuz ve biber'
    ],
    [
      'Salata ve otları yıkayıp kesin',
      'Somonu doğrayın',
      'Hardal, sirke ve zeytinyağını işleyerek bir tas haline getirin',
      'Salatayı hazırla',
      'Somon küplerini ve sosu ekleyin'
    ],
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Lezzetli Portakal Mus',
    'ekonomik',
    'zor',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Yaprak Jelatin',
      '150ml Portakal Suyu',
      '80g Şeker',
      '300g Yoğurt',
      '200g Krema',
      'Portakal kabuğu'
    ],
    [
      'Jelatini tencerede eritin',
      'Portakal suyu ve şekeri ekleyin',
      'Tencereyi ocaktan alın',
      '2 yemek kaşığı yoğurt ekleyin',
      'Kalan yoğurdun altına jelatini karıştırın',
      'Her şeyi buzdolabında soğutun',
      'Kremayı çırpın ve portakal kütlesinin altına kaldırın',
      'En az 4 saat boyunca tekrar soğumaya bırakın',
      'Portakal kabuğuyla servis yapın'
    ],
  ),

  new Meal(
    'm7',
    ['c7'],
    'Krep',
    'ekonomik',
    'basit',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Bardak çok amaçlı Un',
      '3 1/2 Çay Kaşığı Kabartma Tozu',
      '1 Çay Kaşığı Tuz',
      '1 Yemek Kaşığı Beyaz Şeker',
      '1 1/4 su bardağı Süt',
      '1 yumurta',
      '3 yemek kaşığı tereyağı, eritilmiş'
    ],
    [
      'Büyük bir kapta un, kabartma tozu, tuz ve şekeri birlikte eleyin.',
      'Ortasını havuz gibi açıp sütü, yumurtayı ve eritilmiş tereyağını dökün; pürüzsüz olana kadar karıştırın.',
      'Hafifçe yağlanmış bir ızgarayı veya kızartma tavasını orta yüksek ateşte ısıtın.',
      'Her gözleme için yaklaşık 1/4 bardak kullanarak hamuru ızgaraya dökün veya kepçeyle dökün. Her iki tarafı da kahverengi olsun ve sıcak servis yapın.'
    ],
  ),

  new Meal(
    'm8',
    ['c8'],
    'Kremalı Hint Körili Tavuk',
    'pahalı',
    'zorlu',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Tavuk Göğsü',
      '1 Soğan',
      '2 Diş Sarımsak',
      '1 Parça Zencefil',
      '4 Yemek Kaşığı Badem',
      '1 Çay Kaşığı Acı Biber',
      '500ml Hindistan Cevizi Sütü'
    ],
    [
      'Tavuk göğüslerini dilimleyip kızartın',
      'Soğan, sarımsak ve zencefili macun haline getirin ve hepsini soteleyin',
      'Baharatları ekleyip karıştırarak kavurun',
      'Tavuk göğsü + 250ml su ekleyip hepsini 10 dakika pişirin',
      'Hindistan cevizi sütü ekleyin',
      'Pilavla servis yapın'
    ],
  ),

  new Meal(
    'm9',
    ['c9'],
    'Çikolatalı sufle',
    'ekonomik',
    'zor',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Çay Kaşığı Eritilmiş Tereyağı',
      '2 Yemek Kaşığı Beyaz Şeker',
      '2 Ons %70 bitter çikolata, parçalara ayrılmış',
      '1 Yemek Kaşığı Tereyağı',
      '1 Yemek Kaşığı çok amaçlı un',
      '4 1/3 yemek kaşığı soğuk Süt',
      '1 Tutam Tuz',
      '1 Tutam Acı Biber',
      '1 Büyük Yumurta Sarısı',
      '2 Büyük Yumurta Akı',
      '1 Tutam Tartar Kreması',
      '1 yemek kaşığı beyaz şeker'
    ],
    [
      "Fırını 190°C'ye ısıtın. Çerçeveli bir fırın tepsisini parşömen kağıdıyla kaplayın.",
      '2 ramekinin altını ve yanlarını 1 çay kaşığı eritilmiş tereyağıyla hafifçe fırçalayın; alt ve yanları kenara kadar kaplayın.',
      'Ramekinlere 1 yemek kaşığı beyaz şeker ekleyin. Şeker tüm yüzeyleri kaplayana kadar kalıpları döndürün.',
      'Çikolata parçalarını metal bir karıştırma kabına yerleştirin.',
      'Kaseyi, kısık ateşte yaklaşık 3 bardak sıcak su bulunan bir tavanın üzerine yerleştirin.',
      '1 yemek kaşığı tereyağını orta ateşte tavada eritin. Un serpin. Un tereyağına karışıncaya ve karışım koyulaşıncaya kadar çırpın.',
      'Karışım pürüzsüz hale gelip koyulaşana kadar soğuk sütü çırpın. Karışımı eritilmiş çikolatanın bulunduğu kaseye aktarın.',
      'Tuz ve kırmızı biberi ekleyin. Birlikte iyice karıştırın. Yumurta sarısını ekleyin ve birleştirmek için karıştırın.',
      'Yumurta beyazlarını çırparken çikolatanın sıcak kalması için kaseyi sıcak (kaynamayan) suyun üzerinde bırakın.',
      'Bir karıştırma kabına 2 yumurta beyazını koyun; tartar kremasını ekleyin. Karışım koyulaşmaya başlayana ve çırpma telinden gelen küçük bir damla yaklaşık 1 saniye yüzeyde kalana kadar çırpın ve ardından karışım içinde kaybolun.',
      "Şekerin 1/3'ünü ekleyin ve çırpın. Biraz daha şekeri yaklaşık 15 saniye çırpın.",
      'Şekerin geri kalanını çırpın. Karışım tıraş kremi kadar koyulaşıncaya ve yumuşak zirveler elde edene kadar 3 ila 5 dakika kadar çırpmaya devam edin.',
      'Yumurta beyazlarının yarısından biraz azını çikolataya aktarın.',
      'Yumurta beyazları çikolatanın içine iyice karışıncaya kadar karıştırın.',
      'Yumurta aklarının geri kalanını ekleyin; Bir spatula ile çikolatanın içine yavaşça katlayın, alttan kaldırın ve katlayın.',
      'Yumurta beyazları kaybolunca karıştırmayı bırakın. Karışımı hazırlanan 2 ramekin arasında bölün. Hazırlanan fırın tepsisine ramekinleri yerleştirin.',
      'Önceden ısıtılmış fırında, parçalar kabarıncaya ve jantların üstüne çıkana kadar, 12 ila 15 dakika pişirin.'
    ],
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Kiraz Domatesli Kuşkonmaz Salatası',
    'lüks',
    'basit',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'Beyaz ve Yeşil Kuşkonmaz',
      '30g Çam Fıstığı',
      '300g Kiraz Domates',
      'Salata',
      'Tuz, Biber ve Zeytinyağı'
    ],
    [
      'Kuşkonmazı yıkayın, soyun ve kesin',
      'Tuzlu suda pişirin',
      'Kuşkonmazı tuzlayıp karabiberleyin',
      'Çam fıstıklarını kızartın',
      'Domatesleri ikiye bölün',
      'Kuşkonmaz, salata ve sosla karıştırın',
      'Baget ile servis yapın'
    ],
  )
];
