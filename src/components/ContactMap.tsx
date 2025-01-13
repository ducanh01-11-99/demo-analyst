import React from 'react';

const ContactMap = () => {
  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1159.8302616840695!2d106.28408665028536!3d20.762760451459094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31359370953df7b3%3A0x10bd2b1159b4d677!2zTmjDoCBtYXkgTeG6rW4!5e0!3m2!1svi!2s!4v1736783952212!5m2!1svi!2s"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default ContactMap;