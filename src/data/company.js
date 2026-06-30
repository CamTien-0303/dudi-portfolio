import {
  Code2,
  Smartphone,
  Palette,
  Globe,
  LayoutDashboard,
  Settings,
  CheckCircle,
  Target,
  Clock,
  Headphones,
  Expand,
  MessageCircle,
} from 'lucide-react';

export const services = [
  {
    id: 'software-solutions',
    icon: Code2,
    title: 'Giải pháp phần mềm',
    description:
      'Phát triển phần mềm tùy chỉnh, đáp ứng nghiệp vụ riêng biệt của doanh nghiệp. Từ hệ thống nội bộ đến nền tảng SaaS.',
  },
  {
    id: 'mobile-apps',
    icon: Smartphone,
    title: 'Ứng dụng di động',
    description:
      'Thiết kế & phát triển ứng dụng iOS/Android chất lượng cao, trải nghiệm mượt mà, tối ưu hiệu năng.',
  },
  {
    id: 'ux-ui-design',
    icon: Palette,
    title: 'Thiết kế UX/UI',
    description:
      'Thiết kế giao diện thẩm mỹ, trải nghiệm người dùng tối ưu, tăng tỷ lệ chuyển đổi và giữ chân khách hàng.',
  },
  {
    id: 'web-development',
    icon: Globe,
    title: 'Thiết kế & phát triển website',
    description:
      'Website chuẩn SEO, tải nhanh, responsive hoàn hảo. Phù hợp mọi ngành nghề từ dịch vụ, thương mại đến giáo dục.',
  },
  {
    id: 'web-app',
    icon: LayoutDashboard,
    title: 'Web App & hệ thống quản trị',
    description:
      'Xây dựng hệ thống quản trị nội bộ, CRM, ERP, dashboard analytics giúp doanh nghiệp vận hành hiệu quả.',
  },
  {
    id: 'maintenance',
    icon: Settings,
    title: 'Vận hành & tối ưu website',
    description:
      'Bảo trì, cập nhật nội dung, tối ưu tốc độ, bảo mật và SEO. Đảm bảo website hoạt động ổn định 24/7.',
  },
];

export const whyChooseUs = [
  {
    icon: CheckCircle,
    title: 'Quy trình rõ ràng, không mơ hồ',
    description: 'Mọi bước triển khai đều được ghi nhận, cập nhật tiến độ minh bạch.',
  },
  {
    icon: Target,
    title: 'Thiết kế theo ngành & thương hiệu',
    description: 'Không dùng template chung. Mỗi website được thiết kế riêng biệt theo đặc thù ngành.',
  },
  {
    icon: Clock,
    title: 'Triển khai đúng tiến độ',
    description: 'Cam kết thời gian bàn giao, không kéo dài, không phát sinh chi phí ẩn.',
  },
  {
    icon: Headphones,
    title: 'Hỗ trợ nhanh & trực tiếp',
    description: 'Đội ngũ support phản hồi nhanh qua Zalo, Telegram, email trong giờ làm việc.',
  },
  {
    icon: Expand,
    title: 'Dễ vận hành – dễ mở rộng',
    description: 'Website được xây dựng để người không biết code vẫn quản lý được, dễ nâng cấp sau này.',
  },
  {
    icon: MessageCircle,
    title: 'Tư vấn đúng nhu cầu',
    description: 'Không bán thừa, không tư vấn thiếu. Đề xuất giải pháp phù hợp quy mô và ngân sách.',
  },
];

export const stats = [
  { number: 30, suffix: '+', label: 'Nhân sự' },
  { number: 5, suffix: '+', label: 'Năm kinh nghiệm' },
  { number: 150, suffix: '+', label: 'Dự án hoàn thành' },
  { number: 50, suffix: '+', label: 'Khách hàng hài lòng' },
];

export const technologies = [
  { name: 'Node.js', color: '#339933' },
  { name: 'Python', color: '#3776AB' },
  { name: 'React', color: '#61DAFB' },
  { name: 'Laravel', color: '#FF2D20' },
  { name: 'Vue', color: '#4FC08D' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Git', color: '#F05032' },
  { name: 'Next.js', color: '#000000' },
  { name: 'AWS', color: '#FF9900' },
];

export const processSteps = [
  {
    step: '01',
    title: 'Tiếp nhận yêu cầu',
    description: 'Lắng nghe, tìm hiểu nhu cầu thực tế và mục tiêu kinh doanh của khách hàng.',
  },
  {
    step: '02',
    title: 'Phân tích, đề xuất giải pháp',
    description: 'Nghiên cứu ngành, đối thủ, đề xuất giải pháp phù hợp quy mô và ngân sách.',
  },
  {
    step: '03',
    title: 'Thiết kế UI/UX',
    description: 'Thiết kế giao diện thẩm mỹ, tối ưu trải nghiệm người dùng trên mọi thiết bị.',
  },
  {
    step: '04',
    title: 'Lập trình, kiểm thử',
    description: 'Code chuẩn, kiểm thử kỹ lưỡng đảm bảo website hoạt động ổn định, bảo mật.',
  },
  {
    step: '05',
    title: 'Demo, chỉnh sửa',
    description: 'Trình bày sản phẩm, thu thập feedback và chỉnh sửa cho đến khi hoàn hảo.',
  },
  {
    step: '06',
    title: 'Bàn giao, hướng dẫn',
    description: 'Bàn giao sản phẩm kèm tài liệu hướng dẫn sử dụng chi tiết.',
  },
  {
    step: '07',
    title: 'Bảo hành, hỗ trợ',
    description: 'Bảo hành miễn phí, hỗ trợ kỹ thuật nhanh chóng, đồng hành lâu dài.',
  },
];

export const contactInfo = {
  website: 'https://dudisoftware.com/',
  fanpage: 'https://facebook.com/dudisoftware',
  email: 'contact@dudisoftware.com',
  hotline: '(+84) 909 163 821',
  workingHours: 'Thứ hai - Thứ sáu, 9AM - 6PM',
};

export const navigation = [
  { label: 'Trang chủ', href: '/#home' },
  { label: 'Giới thiệu', href: '/#about' },
  { label: 'Dịch vụ', href: '/#services' },
  { label: 'Quy trình', href: '/#process' },
  { label: 'Dự án', href: '/#projects' },
  { label: 'Bảng giá', href: '/#pricing' },
  { label: 'Liên hệ', href: '/#contact' },
];
