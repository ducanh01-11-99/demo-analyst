import React from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, Row, Col } from 'antd';
import { motion } from 'framer-motion';

const traditionalProducts = [
  {
    id: 1,
    name: "Áo Dài Cách Tân",
    price: "2,290,000đ",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
  },
  {
    id: 2,
    name: "Áo Dài Truyền Thống",
    price: "1,890,000đ",
    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27"
  }
];

const suitProducts = [
  {
    id: 1,
    name: "Vest Nam Cao Cấp",
    price: "4,290,000đ",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    id: 2,
    name: "Vest Nữ Công Sở",
    price: "3,890,000đ",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35"
  }
];


const miniProducts = [
  {
    id: 1,
    name: "Vest Nam Cao Cấp",
    price: "4,290,000đ",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7"
  },
  {
    id: 2,
    name: "Vest Nữ Công Sở",
    price: "3,890,000đ",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35"
  }
];

const ProductTabs = () => {
  return (
    <Tabs defaultValue="traditional" className="w-full">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="traditional">Áo dài truyền thống</TabsTrigger>
        <TabsTrigger value="miniProducts">Áo dài trẻ em</TabsTrigger>
        <TabsTrigger value="suits">Vest nam, nữ cao cấp</TabsTrigger>
      </TabsList>
      <TabsContent value="traditional">
        <Row gutter={[32, 32]}>
          {traditionalProducts.map(product => (
            <Col xs={24} sm={12} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.image} className="h-64 object-cover" />}
                  className="text-center"
                >
                  <Card.Meta
                    title={product.name}
                    description={product.price}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </TabsContent>
      <TabsContent value="miniProducts">
        <Row gutter={[32, 32]}>
          {miniProducts.map(product => (
              <Col xs={24} sm={12} key={product.id}>
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                  <Card
                      hoverable
                      cover={<img alt={product.name} src={product.image} className="h-64 object-cover" />}
                      className="text-center"
                  >
                    <Card.Meta
                        title={product.name}
                        description={product.price}
                    />
                  </Card>
                </motion.div>
              </Col>
          ))}
        </Row>
      </TabsContent>
      <TabsContent value="suits">
        <Row gutter={[32, 32]}>
          {suitProducts.map(product => (
            <Col xs={24} sm={12} key={product.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  hoverable
                  cover={<img alt={product.name} src={product.image} className="h-64 object-cover" />}
                  className="text-center"
                >
                  <Card.Meta
                    title={product.name}
                    description={product.price}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;