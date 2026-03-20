import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .background-video {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .container {
    width: 340px;
    padding: 25px;
    border-radius: 16px;
    backdrop-filter: blur(12px);
    background: rgba(255,255,255,0.15);
    box-shadow: 0 10px 30px rgba(0,0,0,0.25);
    text-align: center;
    color: white;
  }

  h2 {
    margin-bottom: 20px;
    font-weight: 600;
  }

  .searchArea {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }

  .searchArea input {
    flex: 1;
    padding: 10px;
    border-radius: 25px;
    border: none;
    outline: none;
    font-size: 14px;
  }

  .searchCircle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.2s;
  }

  .searchCircle:hover {
    transform: scale(1.1);
  }

  .searchIcon {
    color: #333;
    font-size: 18px;
  }

  .weatherArea {
    margin-top: 10px;
  }

  .weatherArea img {
    width: 90px;
  }

  .weatherArea h1 {
    font-size: 42px;
    margin: 10px 0;
  }

  .weatherArea span {
    text-transform: capitalize;
    font-size: 16px;
  }

  .bottomInfoArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    border-radius: 12px;
    background: rgba(255,255,255,0.2);
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 14px;
  }

  .humidIcon,
  .windIcon {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    .container {
      width: 90%;
    }

    .weatherArea h1 {
      font-size: 36px;
    }
  }
`;