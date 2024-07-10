import { useState } from "react";
import "./style.scss";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

function App() {
  const calculateAge = (day: number, month: number, year: number) => {
    const today = new Date();
    const birth = new Date(year, month - 1, day);

    let ageYears = today.getFullYear() - birth.getFullYear();
    let ageMonths = today.getMonth() - birth.getMonth();
    let ageDays = today.getDate() - birth.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    return { years: ageYears, months: ageMonths, days: ageDays };
  };

  const date = new Date()
  const atualDay = date.getDate() 
  const atualMonth = date.getMonth() + 1;
  const atualYear = date.getFullYear();

  console.log(atualDay)



  const [day, setDay] = useState<number>(atualDay);
  const [month, setMonth] = useState<number>(atualMonth);
  const [year, setYear] = useState<number>(atualYear);
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });
  const [showAge, setShowAge] = useState<boolean>(false);

  const handleDateChange = () => {
    if (day && month && year) {
      setAge(calculateAge(day, month, year));
      setShowAge(true);
    }
  };

  return (
    <section className="container">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      <div className="content">
        <div className="age">
          <div className="container-info">
            <label>Day</label>
            <input
              type="number"
              value={day}
              onChange={(e) => setDay(Number(e.target.value))}
              min={1}
              max={31}
            />
          </div>
          <div className="container-info">
            <label>Month</label>
            <input
              type="number"
              value={month}
              onChange={(e) => setMonth(Number(e.target.value))}
              min={1}
              max={12}
            />
          </div>
          <div className="container-info">
            <label>Year</label>
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(Number(e.target.value))}
              min={1900}
              max={2024}
            />
          </div>
        </div>
        <div className="btn">
          <span></span>
          <button onClick={handleDateChange} title="Ver resultado">
            <MdKeyboardDoubleArrowDown />
          </button>
        </div>

        <div className="showAge">
          {!showAge ? (
            <p>Informe sua data de nascimento para descobrir sua idade!</p>
          ) : (
            <div className="Age">
              <h3>
                <span>{age.years}</span>
                years
              </h3>
              <h3>
                <span>{age.months}</span>
                months
              </h3>
              <h3>
                <span>{age.days}</span>
                days
              </h3>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default App;
