import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const { Title, Paragraph } = Typography;

const news = [
  {
    id: 1,
    title: "Xu hướng thời trang mùa Thu 2024",
    desc: "Khám phá những xu hướng thời trang mới nhất cho mùa Thu năm nay",
    date: "15/03/2024",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    content: "Nội dung chi tiết bài viết..."
  },
  {
    id: 2,
    title: "Bí quyết phối đồ công sở",
    desc: "Hướng dẫn cách phối đồ công sở thanh lịch và chuyên nghiệp",
    date: "12/03/2024",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
    content: "Nội dung chi tiết bài viết..."
  },
  {
    id: 3,
    title: "Bí quyết phối đồ công sở",
    desc: "Hướng dẫn cách phối đồ công sở thanh lịch và chuyên nghiệp",
    date: "12/03/2024",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
    content: "Nội dung chi tiết bài viết..."
  }
];

const NewsSection = () => {
  const navigate = useNavigate();

  const handleNewsClick = (newsId: number) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <Row gutter={[32, 32]}>
      {news.map(item => (
        <Col xs={24} md={12} key={item.id}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              hoverable
              onClick={() => handleNewsClick(item.id)}
              cover={<img alt={item.title} src={item.image} className="h-48 object-cover" />}
              className="h-full"
            >
              <Title level={4}>{item.title}</Title>
              <Paragraph className="text-gray-600">{item.desc}</Paragraph>
              <div className="text-sm text-gray-500">{item.date}</div>
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default NewsSection;