import { useExport } from "../../../../../hooks/useExport";
import { useTheme } from "../../../../../context/ThemeContext";

const Icons = () => {
  const { isDarkMode } = useTheme();
  const {
    darkInstagram,
    darkTwitter,
    darkLinkedln,
    lightInstagram,
    lightTwitter,
    lightLinkedln,
  } = useExport();

  return (
    <div>
      {isDarkMode ? (
        <div
          className="d-flex gap-4"
          style={{
            gap: "20px",
          }}
          data-aos="fade-up"
          data-aos-once="true"
        >
          <img
            src={darkLinkedln}
            alt="dark linkedln icon"
            className="icon"
          />
          <img
            src={darkTwitter}
            alt="dark twitter icon"
            className="icon"
          />
          <img
            src={darkInstagram}
            alt="dark instagram icon"
            className="icon"
          />
        </div>
      ) : (
        <div
          className="d-flex gap-5"
          style={{
            gap: "20px",
          }}
        >
          <img
            src={lightLinkedln}
            alt="light linkdeln icon"
            className="icon"
          />
          <img
            src={lightTwitter}
            alt="light twitter icon"
            className="icon"
          />
          <img
            src={lightInstagram}
            alt="light instagram icon"
            className="icon"
          />
        </div>
      )}
    </div>
  );
};

export default Icons;
