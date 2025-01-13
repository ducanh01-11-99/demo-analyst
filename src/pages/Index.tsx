import React, { useRef, useEffect } from 'react';
import { Layout, Button, Row, Col, Typography } from 'antd';
import { ArrowRightOutlined, ShoppingOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ProductTabs from '@/components/ProductTabs';
import NewsSection from '@/components/NewsSection';
import ContactMap from '@/components/ContactMap';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

const Index = () => {
  const productsRef = useRef<HTMLElement>(null);

  const scrollToProducts = () => {
    productsRef.current?.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050",
      title: "Thời Trang Đẳng Cấp",
      description: "Khám phá bộ sưu tập mới nhất với những thiết kế độc đáo và chất liệu cao cấp"
    },
    {
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      title: "Phong Cách Sống Động",
      description: "Thể hiện cá tính với những bộ trang phục thời thượng"
    },
    {
      image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
      title: "Xu Hướng Mới Nhất",
      description: "Cập nhật những xu hướng thời trang mới nhất trên thế giới"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const carousel = document.querySelector('[role="region"][aria-roledescription="carousel"]');
      if (carousel) {
        const nextButton = carousel.querySelector('[aria-label="Next slide"]') as HTMLButtonElement;
        nextButton?.click();
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout className="min-h-screen">
      {/* Navigation */}
      <Header className="bg-white border-b border-gray-200 fixed w-full z-50">
        <nav className="container mx-auto flex justify-between items-center h-full">
          <div className="text-2xl font-bold">FASHION STORE</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gold transition-colors">Trang chủ</a>
            <a href="#products" className="hover:text-gold transition-colors">Sản phẩm</a>
            <a href="#news" className="hover:text-gold transition-colors">Tin tức</a>
            <a href="#about" className="hover:text-gold transition-colors">Giới thiệu</a>
            <a href="#contact" className="hover:text-gold transition-colors">Liên hệ</a>
          </div>
        </nav>
      </Header>

      <Content className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[80vh]">
          <Carousel className="w-full h-full">
            <CarouselContent>
              {heroSlides.map((slide, index) => (
                <CarouselItem key={index} className="w-full h-[80vh]">
                  <div 
                    className="relative w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className="absolute inset-0 text-white" />
                    <div className="container mx-auto h-full flex items-center relative z-10">
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl text-white"
                      >
                        <Title level={1} className="text-5xl mb-6 text-white">
                          {slide.title}
                        </Title>
                        <Paragraph className="text-xl mb-8 text-white">
                          {slide.description}
                        </Paragraph>
                        <Button 
                          type="primary" 
                          size="large" 
                          onClick={scrollToProducts}
                          className="bg-white text-black hover:bg-gold hover:text-white transition-colors"
                        >
                          Khám phá ngay <ArrowRightOutlined />
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </section>

        {/* Products Section */}
        <section id="products" ref={productsRef} className="py-20 bg-white">
          <div className="container mx-auto">
            <Title level={2} className="text-center mb-12">Sản Phẩm Nổi Bật</Title>
            <ProductTabs />
          </div>
        </section>

        {/* News Section */}
        <section id="news" className="py-20 bg-beige">
          <div className="container mx-auto">
            <Title level={2} className="text-center mb-12">Tin Tức & Bài Viết</Title>
            <NewsSection />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto">
            <Title level={2} className="text-center mb-12">Liên Hệ</Title>
            <Row gutter={[32, 32]}>
              <Col xs={24} lg={12}>
                <ContactMap />
              </Col>
              <Col xs={24} lg={12}>
                <div className="space-y-8">
                  <div className="flex items-center space-x-4">
                    <PhoneOutlined className="text-4xl text-gold" />
                    <div>
                      <Title level={4} className="mb-1">Điện thoại</Title>
                      <Paragraph className="mb-0">0348 761 088</Paragraph>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <ShoppingOutlined className="text-4xl text-gold" />
                    <div>
                      <Title level={4} className="mb-1">Cửa hàng</Title>
                      <Paragraph className="mb-0">Chân cầu Di Linh, thôn Di Linh, xã Tân Quang, huyện Ninh Giang, tỉnh Hải Dương</Paragraph>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </Content>

      <Footer className="bg-black text-white">
        <div className="container mx-auto py-12">
          <Row gutter={[48, 32]}>
            <Col xs={24} md={8}>
              <Title level={3} className="text-white mb-6">FASHION STORE</Title>
              <Paragraph className="text-gray-400 mb-6">
                Chúng tôi mang đến những sản phẩm chất lượng và dịch vụ tốt nhất cho khách hàng.
              </Paragraph>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-2xl">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-2xl">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-gold transition-colors text-2xl">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white mb-6">Liên kết nhanh</Title>
              <div className="grid grid-cols-2 gap-4">
                <a href="#home" className="text-gray-400 hover:text-gold transition-colors">Trang chủ</a>
                <a href="#products" className="text-gray-400 hover:text-gold transition-colors">Sản phẩm</a>
                <a href="#news" className="text-gray-400 hover:text-gold transition-colors">Tin tức</a>
                <a href="#about" className="text-gray-400 hover:text-gold transition-colors">Giới thiệu</a>
                <a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Liên hệ</a>
              </div>
            </Col>
            <Col xs={24} md={8}>
              <Title level={4} className="text-white mb-6">Giờ mở cửa</Title>
              <div className="space-y-4 text-gray-400">
                <p>Thứ 2 - Thứ 6: 9:00 - 21:00</p>
                <p>Thứ 7: 9:00 - 22:00</p>
                <p>Chủ nhật: 10:00 - 21:00</p>
              </div>
            </Col>
          </Row>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            © 2024 Fashion Store. All rights reserved.
          </div>
        </div>
      </Footer>
    </Layout>
  );
};

export default Index;
