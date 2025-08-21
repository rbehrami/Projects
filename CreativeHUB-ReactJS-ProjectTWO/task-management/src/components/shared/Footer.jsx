const Footer = ({ 
  text = "© Task Manager. All rights reserved.", 
  bgColor = "bg-gray-100", 
  textColor = "text-gray-500", 
  align = "text-center" 
}) => {
  return (
    <footer className={`${bgColor} border-t py-3`}>
      <div className={`max-w-7xl mx-auto px-4 ${align}`}>
        <p className={`text-xs ${textColor}`}>
          {text}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
