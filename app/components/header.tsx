import Image from "next/image";
import { NavBar } from "./nav-bar";

export const Header = () => {
  return (
    <header className="relative">
      <div>
        <svg
          className="absolute -z-10 sm:hidden"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffd6e5"
            fillOpacity="1"
            d="M0,256L11.4,224C22.9,192,46,128,69,122.7C91.4,117,114,171,137,197.3C160,224,183,224,206,213.3C228.6,203,251,181,274,192C297.1,203,320,245,343,224C365.7,203,389,117,411,90.7C434.3,64,457,96,480,90.7C502.9,85,526,43,549,69.3C571.4,96,594,192,617,213.3C640,235,663,181,686,160C708.6,139,731,149,754,133.3C777.1,117,800,75,823,74.7C845.7,75,869,117,891,117.3C914.3,117,937,75,960,53.3C982.9,32,1006,32,1029,48C1051.4,64,1074,96,1097,122.7C1120,149,1143,171,1166,176C1188.6,181,1211,171,1234,144C1257.1,117,1280,75,1303,64C1325.7,53,1349,75,1371,90.7C1394.3,107,1417,117,1429,122.7L1440,128L1440,0L1428.6,0C1417.1,0,1394,0,1371,0C1348.6,0,1326,0,1303,0C1280,0,1257,0,1234,0C1211.4,0,1189,0,1166,0C1142.9,0,1120,0,1097,0C1074.3,0,1051,0,1029,0C1005.7,0,983,0,960,0C937.1,0,914,0,891,0C868.6,0,846,0,823,0C800,0,777,0,754,0C731.4,0,709,0,686,0C662.9,0,640,0,617,0C594.3,0,571,0,549,0C525.7,0,503,0,480,0C457.1,0,434,0,411,0C388.6,0,366,0,343,0C320,0,297,0,274,0C251.4,0,229,0,206,0C182.9,0,160,0,137,0C114.3,0,91,0,69,0C45.7,0,23,0,11,0L0,0Z"
          ></path>
        </svg>
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="mt-6 z-10"
          src="/logo.png"
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </div>
      <NavBar />
    </header>
  );
};
