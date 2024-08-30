function Contact() {
  return (
    <ul className="gap-4 flex flex-col text-sm">
      <li className="flex items-center">
        <span className="text-2xl mr-4">
          <i className="fa-solid fa-phone-volume"></i>
        </span>
        <span>(704) 555-0127</span>
      </li>
      <li className="flex items-center">
        <span className="text-2xl mr-4">
          <i className="fa-regular fa-envelope"></i>
        </span>
        <span>krist@example.com</span>
      </li>
      <li className="flex items-center">
        <span className="text-2xl mr-4">
          <i className="fa-solid fa-location-dot"></i>
        </span>
        <span>3891 Ranchview Dr. Richardson, California 62639</span>
      </li>
    </ul>
  );
}

export default Contact;
