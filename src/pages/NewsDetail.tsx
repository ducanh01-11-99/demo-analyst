import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeftIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

// Mocked data - in a real app, this would come from an API
const newsData = {
  1: {
    title: "Xu hướng thời trang mùa Thu 2024",
    content: `
      <p>Mùa thu năm 2024 đánh dấu sự trở lại của phong cách vintage kết hợp với các yếu tố hiện đại. Các nhà thiết kế đang tập trung vào việc tái định nghĩa những item cổ điển với một góc nhìn mới mẻ và sáng tạo hơn.</p>
      
      <h3>1. Áo khoác oversized</h3>
      <p>Áo khoác oversized tiếp tục là một trong những item được ưa chuộng nhất trong mùa thu này. Với form dáng rộng rãi, thoải mái, những chiếc áo khoác oversized không chỉ giúp giữ ấm hiệu quả mà còn mang đến vẻ ngoài thời thượng cho người mặc.</p>
      
      <h3>2. Họa tiết kẻ caro</h3>
      <p>Họa tiết kẻ caro classic được tái hiện với những gam màu mới mẻ hơn, tạo nên sự kết hợp độc đáo giữa truyền thống và hiện đại.</p>
      
      <h3>3. Gam màu đất</h3>
      <p>Các tông màu đất như nâu, be, nude tiếp tục thống trị xu hướng màu sắc mùa thu năm nay. Những gam màu này không chỉ phù hợp với không khí mùa thu mà còn dễ dàng mix&match với nhiều item khác nhau.</p>`,
    date: "15/03/2024",
    author: "Thanh Hà",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
    relatedImages: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b",
      "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04"
    ]
  },
  2: {
    title: "Bí quyết phối đồ công sở",
    content: `
      <p>Việc ăn mặc trong môi trường công sở không chỉ đơn thuần là vấn đề thẩm mỹ mà còn thể hiện sự chuyên nghiệp và tôn trọng nơi làm việc.</p>
      
      <h3>1. Chọn trang phục phù hợp</h3>
      <p>Ưu tiên những trang phục có form dáng basic, màu sắc trung tính và chất liệu cao cấp. Điều này giúp bạn luôn trông chỉn chu và chuyên nghiệp.</p>
      
      <h3>2. Mix & Match thông minh</h3>
      <p>Học cách kết hợp các item cơ bản để tạo nên những set đồ đa dạng. Một chiếc áo sơ mi trắng có thể kết hợp với quần âu, chân váy hoặc quần jeans tùy theo dress code của công ty.</p>
      
      <h3>3. Phụ kiện điểm nhấn</h3>
      <p>Sử dụng phụ kiện một cách tinh tế để tạo điểm nhấn cho trang phục mà không làm mất đi vẻ chuyên nghiệp của bộ outfit.</p>`,
    date: "12/03/2024",
    author: "Minh Anh",
    image: "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04",
    relatedImages: [
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    ]
  }
};

const NewsDetail = () => {
  const { id } = useParams();
  const news = newsData[Number(id)];

  if (!news) {
    return (
      <div className="container py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Không tìm thấy bài viết</h1>
        <Link to="/">
          <Button>Quay về trang chủ</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container py-4">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground">
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            Quay lại
          </Link>
        </div>
      </header>

      <main className="container py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
            <img
              src={news.image}
              alt={news.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{news.title}</h1>
              <div className="flex items-center text-white/80 space-x-4">
                <span>{news.author}</span>
                <span>•</span>
                <span>{news.date}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="lg:col-span-2">
              <CardContent className="prose prose-lg max-w-none p-8">
                <div dangerouslySetInnerHTML={{ __html: news.content }} />
              </CardContent>
            </Card>

            <div className="space-y-8">
              {/* Related Images */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Hình ảnh liên quan</h3>
                  <div className="grid gap-4">
                    {news.relatedImages.map((image, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        className="relative aspect-video rounded-md overflow-hidden"
                      >
                        <img
                          src={image}
                          alt={`Related image ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Share Section */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Chia sẻ bài viết</h3>
                  <div className="flex space-x-4">
                    <Button variant="outline" className="flex-1">
                      Facebook
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Twitter
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default NewsDetail;