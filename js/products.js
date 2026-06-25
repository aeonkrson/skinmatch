const PRODUCTS = [
  // 1. Madagascar Centella Line (Yellow / Kuning) - Soothing & Calm
  {
    id: "centella-ampoule",
    name: "Madagascar Centella Ampoule",
    category: "Ampoule",
    line: "Centella",
    lineColor: "Yellow",
    description: "Ampoule penenang legendaris dengan 100% ekstrak Centella Asiatica untuk menenangkan kulit sensitif dan memperkuat barrier kulit.",
    ingredients: "100% Madagascar Centella Asiatica Extract.",
    benefits: "Menenangkan kemerahan, meredakan iritasi, menghidrasi kulit, dan memperbaiki barrier kulit.",
    usage: "Teteskan secukupnya pada wajah setelah mencuci muka dan menggunakan toner. Pijat lembut hingga meresap.",
    skinType: "Sensitive",
    image: "assets/centella_ampoule.png"
  },
  {
    id: "centella-toning-toner",
    name: "Madagascar Centella Toning Toner",
    category: "Toner",
    line: "Centella",
    lineColor: "Yellow",
    description: "Toner harian ringan dengan PHA untuk eksfoliasi lembut yang aman bagi kulit sensitif.",
    ingredients: "Centella Asiatica Extract, PHA, Niacinamide, Adenosine, Hyaluronic Acid.",
    benefits: "Mengangkat sel kulit mati secara lembut, mencerahkan, dan mempersiapkan kulit untuk skincare berikutnya.",
    usage: "Tuangkan pada kapas atau telapak tangan bersih. Usapkan secara merata ke seluruh wajah setelah mencuci muka.",
    skinType: "Sensitive",
    image: "assets/centella_toning_toner.png"
  },
  {
    id: "centella-light-cleansing-oil",
    name: "Madagascar Centella Light Cleansing Oil",
    category: "Cleanser",
    line: "Centella",
    lineColor: "Yellow",
    description: "Minyak pembersih wajah yang ringan untuk mengangkat kotoran, makeup, dan sebum membandel secara mendalam.",
    ingredients: "Centella Asiatica Extract, MCT Oil (dari Kelapa), Jojoba Seed Oil, Olive Fruit Oil.",
    benefits: "Membersihkan makeup tahan air, membersihkan pori-pori tersumbat, tanpa pedih di mata.",
    usage: "Pompa secukupnya pada telapak tangan kering. Pijat lembut ke wajah yang kering hingga makeup luruh. Tambahkan sedikit air untuk mengemulsi, lalu bilas.",
    skinType: "Sensitive",
    image: "assets/centella_cleansing_oil.png"
  },

  // 2. Hyalu-Cica Line (Blue / Biru) - Deep Hydration
  {
    id: "hyalu-cica-blue-serum",
    name: "Madagascar Centella Hyalu-Cica Blue Serum",
    category: "Serum",
    line: "Hyalu-Cica",
    lineColor: "Blue",
    description: "Serum hidrasi intensif dengan formula khusus Hyalu-Cica (Hyaluronic Acid & Centella) untuk kulit sangat kering.",
    ingredients: "Hyaluronic Acid, Centella Asiatica Extract, Niacinamide, Ceramide, Ivy Leaf Extract.",
    benefits: "Menyediakan kelembapan ekstra, mencerahkan kulit kusam, dan mengembalikan kekenyalan kulit.",
    usage: "Gunakan 2-3 tetes pada wajah yang bersih sebelum pelembap pagi dan malam.",
    skinType: "Dry",
    image: "assets/hyalu_cica_blue_serum.png"
  },
  {
    id: "hyalu-cica-sleeping-pack",
    name: "Madagascar Centella Hyalu-Cica Sleeping Pack",
    category: "Moisturizer",
    line: "Hyalu-Cica",
    lineColor: "Blue",
    description: "Masker malam berbentuk gel ringan tanpa bilas yang menutrisi kulit secara mendalam saat Anda tidur.",
    ingredients: "Hyalu-Cica Formula, Melatonin, Niacinamide, Adenosine, Ceramide.",
    benefits: "Memperbaiki elastisitas kulit semalam, mengunci kelembapan, membuat kulit glowing di pagi hari.",
    usage: "Aplikasikan sebagai langkah terakhir skincare malam hari. Biarkan semalaman dan bilas keesokan paginya.",
    skinType: "Dry",
    image: "assets/hyalu_cica_sleeping_pack.png"
  },

  // 3. Poremizing Line (Pink) - Pore Tightening & Sebum Control
  {
    id: "poremizing-fresh-ampoule",
    name: "Madagascar Centella Poremizing Fresh Ampoule",
    category: "Ampoule",
    line: "Poremizing",
    lineColor: "Pink",
    description: "Ampoule khusus pori-pori besar yang diperkaya garam merah muda Himalaya untuk membersihkan dan mengencangkan pori-pori.",
    ingredients: "Himalayan Pink Salt, Centella Asiatica Extract, Peptide Complex.",
    benefits: "Mengontrol produksi sebum berlebih, membersihkan kotoran penyumbat pori, meningkatkan elastisitas pori-pori.",
    usage: "Teteskan 2-3 tetes setelah toner, tepuk lembut di area wajah yang memiliki pori-pori besar.",
    skinType: "Oily",
    image: "assets/poremizing_fresh_ampoule.png"
  },
  {
    id: "poremizing-clear-toner",
    name: "Madagascar Centella Poremizing Clear Toner",
    category: "Toner",
    line: "Poremizing",
    lineColor: "Pink",
    description: "Toner pembersih pori dengan kandungan AHA, BHA, LHA, dan PHA untuk mengeksfoliasi sel kulit mati di kulit berminyak.",
    ingredients: "Centella Asiatica Extract, Himalayan Pink Salt, AHA, BHA, PHA, LHA.",
    benefits: "Mengontrol kilap minyak, membersihkan sebum membandel, serta melembutkan tekstur kulit.",
    usage: "Tuangkan pada kapas, usap lembut ke seluruh wajah setelah mencuci muka.",
    skinType: "Oily",
    image: "assets/poremizing_clear_toner.png"
  },

  // 4. Tea-Trica Line (Green / Hijau) - Acne & Relief
  {
    id: "tea-trica-relief-ampoule",
    name: "Madagascar Centella Tea-Trica Relief Ampoule",
    category: "Ampoule",
    line: "Tea-Trica",
    lineColor: "Green",
    description: "Ampoule pertolongan pertama untuk kulit berjerawat dengan ekstrak jarum pinus dan tea tree yang menenangkan kemerahan.",
    ingredients: "Tea-Trica Complex (Pine Tree & Tea Tree), Centella Asiatica Extract, Anti-Sebum P.",
    benefits: "Meredakan jerawat meradang secara instan, mengontrol sebum, serta membersihkan bakteri penyebab jerawat.",
    usage: "Gunakan pada wajah setelah mencuci muka dan menggunakan toner, fokuskan pada area berjerawat.",
    skinType: "Acne-prone",
    image: "assets/tea_trica_relief_ampoule.png"
  },
  {
    id: "tea-trica-bha-foam",
    name: "Madagascar Centella Tea-Trica BHA Foam",
    category: "Cleanser",
    line: "Tea-Trica",
    lineColor: "Green",
    description: "Pembersih busa berjerawat dengan kandungan BHA (Salicylic Acid) untuk membersihkan kulit berjerawat dari minyak berlebih.",
    ingredients: "Salicylic Acid (BHA), Tea Tree Leaf Water, Centella Asiatica Extract.",
    benefits: "Membasmi bakteri jerawat, membersihkan komedo, dan mengontrol minyak tanpa merusak barrier kulit.",
    usage: "Busakan pembersih di tangan dengan air, pijat lembut ke wajah, lalu bilas hingga bersih.",
    skinType: "Acne-prone",
    image: "assets/tea_trica_bha_foam.png"
  },

  // 5. Tone Brightening Line (White / Silver) - Brightening
  {
    id: "tone-brightening-ampoule",
    name: "Madagascar Centella Tone Brightening Capsule Ampoule",
    category: "Ampoule",
    line: "Tone Brightening",
    lineColor: "White",
    description: "Ampoule pencerah dengan butiran kapsul MadeWhite yang mencerahkan noda hitam dan meratakan warna kulit kusam.",
    ingredients: "Centella Asiatica Extract, Niacinamide, MadeWhite (kapsul), Tranexamic Acid, Vitamin C.",
    benefits: "Mencerahkan kulit, menyamarkan bekas jerawat/flek hitam, dan memberikan efek kulit glowing alami.",
    usage: "Teteskan secukupnya pada wajah, tepuk-tepuk hingga butiran kapsul pencerahnya meleleh dan meresap sempurna.",
    skinType: "Dull",
    image: "assets/tone_brightening_ampoule.png"
  },
  {
    id: "tone-brightening-toner",
    name: "Madagascar Centella Tone Brightening Boosting Toner",
    category: "Toner",
    line: "Tone Brightening",
    lineColor: "White",
    description: "Toner pencerah bertekstur cair yang memberikan kesegaran instan serta mempersiapkan kulit untuk menyerap ampoule pencerah.",
    ingredients: "Centella Asiatica Extract, MadeWhite, Niacinamide, Singreen Complex.",
    benefits: "Mencerahkan wajah kusam, menenangkan kemerahan, dan melembutkan kulit kering kasar.",
    usage: "Tuangkan pada kapas atau langsung ke telapak tangan, aplikasikan setelah mencuci muka.",
    skinType: "Dull",
    image: "assets/tone_brightening_toner.png"
  },

  // 6. Probio-Cica Line (Brown / Emas) - Barrier Repair
  {
    id: "probio-cica-ampoule",
    name: "Madagascar Centella Probio-Cica Intensive Ampoule",
    category: "Ampoule",
    line: "Probio-Cica",
    lineColor: "Brown",
    description: "Ampoule kaya nutrisi dengan fermentasi Centella (Lacto-Cica) dan Ceramide NP untuk pemulihan skin barrier yang rusak.",
    ingredients: "Fermented Centella Asiatica (Lacto-Cica), Ceramide NP, Phytosterol, TECA.",
    benefits: "Memperbaiki skin barrier yang rusak parah, menenangkan iritasi ekstrem, meningkatkan elastisitas kulit.",
    usage: "Gunakan setelah toner. Aplikasikan beberapa tetes secara merata ke seluruh wajah, pijat lembut.",
    skinType: "Damaged Barrier",
    image: "assets/probio_cica_ampoule.png"
  },
  {
    id: "probio-cica-enrich-cream",
    name: "Madagascar Centella Probio-Cica Enrich Cream",
    category: "Moisturizer",
    line: "Probio-Cica",
    lineColor: "Brown",
    description: "Krim pelembap pekat bernutrisi tinggi untuk mengunci hidrasi dan mengembalikan kesehatan skin barrier.",
    ingredients: "Lacto-Cica, Ceramide NP, Shea Butter, Macadamia Seed Oil, Phytosterol.",
    benefits: "Melembapkan kulit kering secara intensif, membentuk lapisan pelindung kelembapan kulit, mempercepat regenerasi kulit.",
    usage: "Gunakan pada langkah terakhir skincare pagi/malam. Ambil secukupnya, ratakan ke seluruh wajah.",
    skinType: "Damaged Barrier",
    image: "assets/probio_cica_enrich_cream.png"
  }
];
