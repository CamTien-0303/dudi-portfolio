// ── Featured projects (shown on main showcase) ──────────────────
const featuredProjects = [
  {
    id: 1,
    title: 'VietTravel Booking',
    category: 'Website',
    industry: 'Du lịch',
    description: 'Hệ thống đặt tour du lịch trực tuyến với tích hợp thanh toán, quản lý booking và dashboard analytics.',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#FF758F',
    image: '/projects/project-01.png',
    url: 'https://viettravel.vn',
    featured: true,
  },
  {
    id: 2,
    title: 'MediCare Clinic',
    category: 'Website',
    industry: 'Y tế',
    description: 'Website giới thiệu phòng khám với hệ thống đặt lịch hẹn online, quản lý bệnh nhân.',
    tags: ['Next.js', 'Laravel', 'MySQL'],
    color: '#2563EB',
    image: '/projects/project-02.png',
    url: 'https://medicare.vn',
    featured: true,
  },
  {
    id: 3,
    title: 'EduSmart Academy',
    category: 'Web App',
    industry: 'Giáo dục',
    description: 'Nền tảng học trực tuyến với video streaming, quiz tương tác và hệ thống chứng chỉ.',
    tags: ['Vue.js', 'Python', 'AWS'],
    color: '#059669',
    image: '/projects/project-03.png',
    url: 'https://edusmart.vn',
    featured: true,
  },
  {
    id: 4,
    title: 'FoodHub Delivery',
    category: 'Web App',
    industry: 'Giao hàng',
    description: 'Ứng dụng đặt đồ ăn với tracking real-time, đánh giá nhà hàng và chương trình loyalty.',
    tags: ['React Native', 'Node.js', 'Docker'],
    color: '#F59E0B',
    image: '/projects/project-04.png',
    url: 'https://foodhub.vn',
    featured: true,
  },
  {
    id: 5,
    title: 'PropertyMax Real Estate',
    category: 'Website',
    industry: 'Doanh nghiệp',
    description: 'Sàn giao dịch bất động sản với bộ lọc thông minh, bản đồ tương tác và tour ảo 360°.',
    tags: ['React', 'Laravel', 'PostgreSQL'],
    color: '#8B5CF6',
    image: '/projects/project-05.png',
    url: 'https://propertymax.vn',
    featured: false,
  },
  {
    id: 6,
    title: 'BeautyGlow Spa',
    category: 'Website',
    industry: 'Làm đẹp',
    description: 'Website giới thiệu dịch vụ spa với booking system, gallery trước/sau và blog chăm sóc da.',
    tags: ['Next.js', 'Tailwind', 'Strapi'],
    color: '#EC4899',
    image: '/projects/project-06.png',
    url: 'https://beautyglow.vn',
    featured: false,
  },
  {
    id: 7,
    title: 'AutoParts Store',
    category: 'Website',
    industry: 'Doanh nghiệp',
    description: 'Cửa hàng phụ tùng ô tô online với hệ thống tìm kiếm theo xe, giỏ hàng và đơn hàng.',
    tags: ['Vue.js', 'Node.js', 'MongoDB'],
    color: '#6366F1',
    image: '/projects/project-07.png',
    url: 'https://autoparts.vn',
    featured: false,
  },
  {
    id: 8,
    title: 'LegalPro Consulting',
    category: 'Website',
    industry: 'Doanh nghiệp',
    description: 'Website công ty luật với hệ thống tư vấn online, quản lý hồ sơ và lịch hẹn.',
    tags: ['React', 'Python', 'Docker'],
    color: '#0891B2',
    image: '/projects/project-08.png',
    url: 'https://legalpro.vn',
    featured: false,
  },
]

// ── Archive projects generator ──────────────────────────────────
// Creates realistic sample data for 300+ projects.
// Replace with real data when available.

const industries = ['Du lịch', 'Y tế', 'Giáo dục', 'Giao hàng', 'Làm đẹp', 'Doanh nghiệp', 'Logistics', 'Bất động sản', 'F&B', 'Thương mại']
const categories = ['Website', 'Web App', 'Website', 'Web App', 'Website', 'Website']
const colors = ['#FF758F', '#2563EB', '#059669', '#F59E0B', '#8B5CF6', '#EC4899', '#6366F1', '#0891B2', '#D97706', '#10B981']

const sampleNames = [
  // Du lịch
  'SaigonTrip Tours', 'HanoiGo Travel', 'VinaTour Pro', 'DaLat Explorer', 'PhuQuoc Paradise',
  'HaLong Cruise', 'MekongDelta Tours', 'NhaTrang Beach', 'HueHeritage Travel', 'SapaTrekking',
  // Y tế
  'DentalPlus Clinic', 'VitaCare Health', 'PharmaPro Chain', 'HealthFirst Hospital', 'EyeCare Optics',
  'CardioMed Center', 'BabyMed Pediatrics', 'DermaCare Skin', 'MindWell Therapy', 'OrthoFix Rehab',
  // Giáo dục
  'LearnViet Online', 'TutorPro Academy', 'KidsCode School', 'LanguageBridge', 'MathGenius Lab',
  'ScienceHub VN', 'ArtClass Studio', 'MusicLearn Pro', 'ExamPrep Master', 'SkillUp Platform',
  // Giao hàng
  'QuickShip Express', 'FlashDelivery VN', 'GrabGoods Plus', 'FreshDrop Market', 'NightOwl Delivery',
  'CityRunner Express', 'PackagePro Ship', 'InstaSend VN', 'GreenDelivery Eco', 'RocketShip Fast',
  // Làm đẹp
  'GlowUp Salon', 'NailArt Studio', 'HairMaster Pro', 'SkinGlow Center', 'LashPerfect',
  'MakeupArtist VN', 'BodyFit Spa', 'ZenRelax Massage', 'PureSkin Lab', 'BeautyBox Store',
  // Doanh nghiệp
  'TechCorp Solutions', 'FinanceHub Pro', 'LawFirm Digital', 'InsureSafe VN', 'AccountPro',
  'HRConnect Platform', 'BuilderPro Const', 'AgriTech Smart', 'EnergyGreen VN', 'CloudOffice Suite',
  // Logistics
  'LogiTrack System', 'WarehousePro VN', 'FreightMaster', 'SupplyChain Hub', 'ContainerTrack',
  'TruckFleet Manager', 'PortConnect VN', 'CargoSafe System', 'InventoryPro', 'RouteOptimizer',
  // Bất động sản
  'LandViet Portal', 'HomeFinder VN', 'ApartmentHub', 'OfficeSpace Pro', 'VillaLux Realty',
  'NewCity Homes', 'SmartProperty', 'RentEasy VN', 'CondoLife Hub', 'InvestLand Pro',
  // F&B
  'CafeViet Online', 'BanhMi Express', 'PhoKing Order', 'TeaHouse Connect', 'SushiBar VN',
  'BeerGarden App', 'CookHome Recipe', 'FarmToTable VN', 'OrganicMart', 'SweetBakery Shop',
  // Thương mại
  'ShopViet Mall', 'FashionHub VN', 'ElectroPro Store', 'BookWorm Online', 'PetCare Market',
  'SportsGear Pro', 'GadgetZone VN', 'HomeDecor Plus', 'BabyShop VN', 'GiftBox Express',
]

const sampleDescs = [
  'Hệ thống quản lý toàn diện với dashboard real-time, báo cáo tự động và phân quyền người dùng chi tiết.',
  'Website giới thiệu dịch vụ chuyên nghiệp với đặt lịch online, quản lý khách hàng và tích hợp thanh toán.',
  'Nền tảng thương mại điện tử với giỏ hàng, thanh toán đa kênh và hệ thống quản lý đơn hàng.',
  'Ứng dụng web quản lý quy trình với workflow tự động, thông báo real-time và báo cáo phân tích.',
  'Landing page tối ưu chuyển đổi với A/B testing, form đăng ký và tích hợp CRM.',
  'Hệ thống booking đa chi nhánh với lịch hẹn, nhắc nhở tự động và thanh toán trực tuyến.',
  'Portal nội bộ doanh nghiệp với quản lý tài liệu, phê duyệt online và chat team.',
  'Website catalogue sản phẩm với tìm kiếm nâng cao, so sánh sản phẩm và đánh giá người dùng.',
  'Hệ thống CMS tùy chỉnh với editor kéo thả, quản lý media và SEO tự động.',
  'Ứng dụng tracking với bản đồ GPS, thống kê lộ trình và báo cáo hiệu suất.',
]

const tagSets = [
  ['React', 'Node.js', 'MongoDB'],
  ['Next.js', 'Laravel', 'MySQL'],
  ['Vue.js', 'Python', 'AWS'],
  ['React', 'Express', 'PostgreSQL'],
  ['Angular', 'Java', 'Redis'],
  ['Next.js', 'Tailwind', 'Strapi'],
  ['React', 'Python', 'Docker'],
  ['Vue.js', 'Node.js', 'MongoDB'],
  ['React', 'Laravel', 'MySQL'],
  ['Next.js', 'Node.js', 'AWS'],
]

function generateArchiveProjects() {
  const archive = []
  for (let i = 0; i < 300; i++) {
    const name = sampleNames[i % sampleNames.length]
    const industryIdx = Math.floor((i % sampleNames.length) / 10)
    const industry = industries[industryIdx] || industries[i % industries.length]
    const category = categories[i % categories.length]
    const suffix = i >= sampleNames.length ? ` ${Math.floor(i / sampleNames.length) + 1}` : ''
    archive.push({
      id: 100 + i,
      title: `${name}${suffix}`,
      category,
      industry,
      description: sampleDescs[i % sampleDescs.length],
      tags: tagSets[i % tagSets.length],
      color: colors[i % colors.length],
      image: null, // No image for archive items — uses placeholder
      url: `https://${name.toLowerCase().replace(/\s+/g, '')}.vn`,
      featured: false,
    })
  }
  return archive
}

// ── Exports ─────────────────────────────────────────────────────

// Featured projects for showcase (backward-compatible)
export const projects = featuredProjects

// All projects for archive (featured + generated)
export const allProjects = [...featuredProjects, ...generateArchiveProjects()]

// All unique industries for filter
export const allIndustries = [...new Set(allProjects.map(p => p.industry))]

// All unique categories for filter
export const allCategories = [...new Set(allProjects.map(p => p.category))]
