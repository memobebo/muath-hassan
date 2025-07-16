import { useState } from 'react';
import { Scale, Phone, Mail, MapPin, Calendar, Shield, Users, Award, ChevronDown, Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [language, setLanguage] = useState('ar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const isArabic = language === 'ar';

  const content = {
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        contact: 'اتصل بنا',
        booking: 'احجز موعد'
      },
      hero: {
        name: 'معاذ حسن بخيت',
        title: 'محامي ومستشار قانوني',
        subtitle: 'خبرة واسعة في مختلف المجالات القانونية',
        description: 'نقدم لك الاستشارات القانونية المتخصصة والحلول القانونية المبتكرة بأعلى معايير الجودة والمهنية',
        cta: 'احجز استشارتك الآن',
        contact: 'تواصل معنا'
      },
      services: {
        title: 'خدماتنا القانونية',
        subtitle: 'نقدم مجموعة شاملة من الخدمات القانونية المتخصصة',
        criminal: {
          title: 'القضايا الجنائية',
          desc: 'دفاع قوي ومتخصص في جميع أنواع القضايا الجنائية'
        },
        civil: {
          title: 'القضايا المدنية',
          desc: 'حلول قانونية فعالة للنزاعات المدنية والتجارية'
        },
        business: {
          title: 'الاستشارات التجارية',
          desc: 'استشارات قانونية متخصصة للشركات والأعمال'
        },
        contracts: {
          title: 'صياغة العقود',
          desc: 'صياغة ومراجعة العقود بدقة ووضوح قانوني'
        }
      },
      about: {
        title: 'من نحن',
        years: 'سنة خبرة',
        clients: 'عميل راضي',
        cases: 'قضية ناجحة',
        description: 'محامٍ متخصص بخبرة واسعة في مختلف المجالات القانونية، نسعى لتقديم أفضل الخدمات القانونية لعملائنا بمهنية عالية ونزاهة.'
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'نحن هنا لمساعدتك في جميع احتياجاتك القانونية',
        name: 'الاسم الكامل',
        email: 'البريد الإلكتروني',
        phone: 'رقم الهاتف',
        subject: 'موضوع الرسالة',
        message: 'رسالتك',
        send: 'إرسال الرسالة',
        address: 'العنوان',
        addressText: 'بورتسودان,  السودان'
      },
      booking: {
        title: 'احجز موعد استشارة',
        caseType: 'نوع القضية',
        preferredTime: 'الوقت المفضل',
        book: 'تأكيد الحجز'
      }
    },
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        services: 'Services', 
        contact: 'Contact',
        booking: 'Book Appointment'
      },
      hero: {
        name: 'Muath Hassan Bukhait',
        title: 'Lawyer & Legal Consultant',
        subtitle: 'Extensive experience in various legal fields',
        description: 'We provide specialized legal consultations and innovative legal solutions with the highest standards of quality and professionalism',
        cta: 'Book Your Consultation Now',
        contact: 'Contact Us'
      },
      services: {
        title: 'Our Legal Services',
        subtitle: 'We provide a comprehensive range of specialized legal services',
        criminal: {
          title: 'Criminal Cases',
          desc: 'Strong and specialized defense in all types of criminal cases'
        },
        civil: {
          title: 'Civil Cases',
          desc: 'Effective legal solutions for civil and commercial disputes'
        },
        business: {
          title: 'Business Consulting',
          desc: 'Specialized legal consultations for companies and businesses'
        },
        contracts: {
          title: 'Contract Drafting',
          desc: 'Drafting and reviewing contracts with precision and legal clarity'
        }
      },
      about: {
        title: 'About Us',
        years: 'Years Experience',
        clients: 'Satisfied Clients',
        cases: 'Successful Cases',
        description: 'A specialized lawyer with extensive experience in various legal fields, we strive to provide the best legal services to our clients with high professionalism and integrity.'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We are here to help you with all your legal needs',
        name: 'Full Name',
        email: 'Email Address',
        phone: 'Phone Number',
        subject: 'Subject',
        message: 'Your Message',
        send: 'Send Message',
        address: 'Address',
        addressText: 'Portsudan, Sudan'
      },
      booking: {
        title: 'Book a Consultation',
        caseType: 'Case Type',
        preferredTime: 'Preferred Time',
        book: 'Confirm Booking'
      }
    }
  };

  const t = content[language];

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isArabic ? "تم إرسال الرسالة بنجاح" : "Message sent successfully",
      description: isArabic ? "سنتواصل معك قريباً" : "We will contact you soon",
    });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: isArabic ? "تم تأكيد الحجز" : "Booking confirmed",
      description: isArabic ? "سنتواصل معك لتأكيد الموعد" : "We will contact you to confirm the appointment",
    });
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${isArabic ? 'rtl' : 'ltr'}`} dir={isArabic ? 'rtl' : 'ltr'}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Scale className="h-8 w-8 text-blue-900" />
              <span className="ml-2 text-xl font-bold text-blue-900">
                {isArabic ? 'مكتب معاذ حسن بخيت' : 'Muath Hassan Bukhait Office'}
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              <a href="#home" className="text-slate-700 hover:text-blue-900 transition-colors font-medium">
                {t.nav.home}
              </a>
              <a href="#about" className="text-slate-700 hover:text-blue-900 transition-colors font-medium">
                {t.nav.about}
              </a>
              <a href="#services" className="text-slate-700 hover:text-blue-900 transition-colors font-medium">
                {t.nav.services}
              </a>
              <a href="#contact" className="text-slate-700 hover:text-blue-900 transition-colors font-medium">
                {t.nav.contact}
              </a>
              <Button 
                className="bg-blue-900 hover:bg-blue-800 text-white px-6"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                {t.nav.booking}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="flex items-center gap-2"
              >
                <Globe className="h-4 w-4" />
                {language === 'ar' ? 'EN' : 'عر'}
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
              >
                <Globe className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-slate-200">
              <div className="flex flex-col space-y-3">
                <a href="#home" className="text-slate-700 hover:text-blue-900 transition-colors py-2">
                  {t.nav.home}
                </a>
                <a href="#about" className="text-slate-700 hover:text-blue-900 transition-colors py-2">
                  {t.nav.about}
                </a>
                <a href="#services" className="text-slate-700 hover:text-blue-900 transition-colors py-2">
                  {t.nav.services}
                </a>
                <a href="#contact" className="text-slate-700 hover:text-blue-900 transition-colors py-2">
                  {t.nav.contact}
                </a>
                <Button 
                  className="bg-blue-900 hover:bg-blue-800 text-white w-full"
                  onClick={() => {
                    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  {t.nav.booking}
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
                {t.hero.name}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-blue-900">
                {t.hero.title}
              </h2>
              <p className="text-xl text-slate-700 font-medium">
                {t.hero.subtitle}
              </p>
              <p className="text-lg text-slate-600 leading-relaxed">
                {t.hero.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 text-lg"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Calendar className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {t.hero.cta}
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-blue-900 text-blue-900 hover:bg-blue-50 px-8 py-4 text-lg"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Phone className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {t.hero.contact}
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-900 to-slate-800 rounded-2xl p-4 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-blue-100 to-slate-100 rounded-xl overflow-hidden">
                  <img 
                  src={`${import.meta.env.BASE_URL}lovable-uploads/508008df-bd66-4b60-9d7e-71fa183caf62.png`}
                    alt={t.hero.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Stats Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.about.description}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-blue-900" />
                </div>
                <div className="text-3xl font-bold text-blue-900">25+</div>
                <div className="text-slate-600">{t.about.years}</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-900" />
                </div>
                <div className="text-3xl font-bold text-blue-900">500+</div>
                <div className="text-slate-600">{t.about.clients}</div>
              </CardContent>
            </Card>
            
            <Card className="text-center p-8 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Shield className="h-8 w-8 text-blue-900" />
                </div>
                <div className="text-3xl font-bold text-blue-900">450+</div>
                <div className="text-slate-600">{t.about.cases}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.services.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.services.subtitle}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <Shield className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.services.criminal.title}</h3>
                <p className="text-slate-600">{t.services.criminal.desc}</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Scale className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.services.civil.title}</h3>
                <p className="text-slate-600">{t.services.civil.desc}</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.services.business.title}</h3>
                <p className="text-slate-600">{t.services.business.desc}</p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Award className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{t.services.contracts.title}</h3>
                <p className="text-slate-600">{t.services.contracts.desc}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.booking.title}
            </h2>
          </div>
          
          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.name}
                    </label>
                    <Input required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.email}
                    </label>
                    <Input type="email" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.phone}
                    </label>
                    <Input type="tel" required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.booking.caseType}
                    </label>
                    <select className="w-full p-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
                      <option value="">{isArabic ? 'اختر نوع القضية' : 'Select case type'}</option>
                      <option value="criminal">{t.services.criminal.title}</option>
                      <option value="civil">{t.services.civil.title}</option>
                      <option value="business">{t.services.business.title}</option>
                      <option value="contracts">{t.services.contracts.title}</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.booking.preferredTime}
                  </label>
                  <Input type="datetime-local" required className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    {t.contact.message}
                  </label>
                  <Textarea rows={4} className="w-full" placeholder={isArabic ? 'اكتب تفاصيل قضيتك هنا...' : 'Write details about your case here...'} />
                </div>
                <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3">
                  <Calendar className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                  {t.booking.book}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {isArabic ? 'اتصل بنا' : 'Call Us'}
                  </h3>
                  <p className="text-slate-600">+966 50 123 4567</p>
                  <p className="text-slate-600">+966 11 234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {isArabic ? 'راسلنا' : 'Email Us'}
                  </h3>
                  <p className="text-slate-600">info@lawyeroffice.com</p>
                  <p className="text-slate-600">consultation@lawyeroffice.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-blue-900" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {t.contact.address}
                  </h3>
                  <p className="text-slate-600">{t.contact.addressText}</p>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.name}
                      </label>
                      <Input required className="w-full" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        {t.contact.email}
                      </label>
                      <Input type="email" required className="w-full" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.subject}
                    </label>
                    <Input required className="w-full" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      {t.contact.message}
                    </label>
                    <Textarea rows={4} required className="w-full" />
                  </div>
                  <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white">
                    <Mail className="mr-2 h-5 w-5 rtl:mr-0 rtl:ml-2" />
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Scale className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">
                {isArabic ? 'مكتب معاذ حسن بخيت' : 'Muath Hassan Bukhait Office'}
              </span>
            </div>
            <p className="text-slate-400 mb-8">
              {isArabic ? 'خدمات قانونية متميزة بأعلى معايير الجودة والمهنية' : 'Distinguished legal services with the highest standards of quality and professionalism'}
            </p>
            <div className="flex justify-center space-x-6 rtl:space-x-reverse">
              <a href="tel:+966501234567" className="text-slate-400 hover:text-white transition-colors">
                <Phone className="h-6 w-6" />
              </a>
              <a href="mailto:info@lawyeroffice.com" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <MapPin className="h-6 w-6" />
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-800 text-slate-400 text-sm">
              <p>© 2025 {isArabic ? 'مكتب معاذ حسن بخيت. جميع الحقوق محفوظة.' : 'Muath Hassan Bukhait Office. All rights reserved.'}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
