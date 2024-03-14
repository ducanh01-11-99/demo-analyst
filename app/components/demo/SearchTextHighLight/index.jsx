import React, { useState } from 'react';
import SearchField from 'react-search-field';
const dataSearch =
  '<span>\n' +
  '    Hôm nay ăn hỏi tưng bừng Ngày mai thì cưới, độ chừng ngày kia Nàng cùng\n' +
  '    chồng mới nàng về Rồi cùng chồng mới nàng đi theo chồng Tôi về dạm vợ là\n' +
  '    xong Vợ người làng, vợ xóm Đông quê mùa Vợ tôi không đợi, không chờ Không\n' +
  '    nhan sắc lắm, không thơ mộng gì Lấy tôi bởi đã đến thì Lấy tôi không phải\n' +
  '    bởi vì yêu tôi. Hôm nay tôi lấy vợ rồi Từ đây tôi sẽ là người bỏ đi Pháo ơi,\n' +
  '    mày nổ làm gì? Biến ra tất cả pháo xì cho tao!\n' +
  '  </span>';
export default function SearchTextHighLight() {
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState(dataSearch);
  const [data1, setData1] = useState(dataSearch);
  const handleSearch = value => {
    setSearchText(value);
    // Tìm kiếm phân biệt chữ hoa chữ thường
    const newData = dataSearch.replaceAll(
      value,
      `<span style='background-color: #bfbf6c'>${value}</span>`,
    );
    setData(newData);

    /* Tìm kiếm không phân biệt chữ hoa chữ thường */
    const lowerCaseText = dataSearch.toLowerCase();
    const lowerCaseSearchTerm = value.toLowerCase();
    const highlightedText = lowerCaseText.replace(
      new RegExp(lowerCaseSearchTerm, 'gi'),
      match => `<span style="color: red;">${match}</span>`,
    );
    setData1(highlightedText);
  };

  return (
    <>
      <SearchField
        placeholder="Tìm kiếm..."
        onEnter={handleSearch}
        onSearchClick={handleSearch}
        searchText={searchText}
      />
      <div style={{ color: '#e09f04' }}>Tìm kiếm có phân biệt hoa thường</div>
      <div dangerouslySetInnerHTML={{ __html: data }} />
      <div>------------------------------------------</div>
      <div style={{ color: '#e09f04' }}>
        Tìm kiếm không phân biệt hoa thường
      </div>
      <div dangerouslySetInnerHTML={{ __html: data1 }} />
    </>
  );
}
