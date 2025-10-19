<template>
  <div class="footer w-100">
    <div class="box">
      <div class="container">
        <div class="bg-black text-white p-5 rounded-5 d-flex justify-content-between  eide-section">
          <div class="title">
            <h1 class="main-title ">STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
          </div>
          <div>
            <div class=" bg-white rounded-pill eide-box  ">
              <i class="far fa-envelope fs-6 mt-1 text-black-50"></i>
              <input class="form-control border-0 eide-input fs-6 m-2 p-0" type="email" id="search"
                placeholder="Enter your email address" v-model="email" required />
            </div>
            <button class="button" @click="subscribe">
              <span>Subscribe to Newsletter</span>
            </button>
          </div>
        </div>
        <div class="row g-2">
          <div class="col-lg-3 mb-3">
            <h1 class="d-flex align-items-center my-2 fs-1 fw-bold">SHOP.CO</h1>
            <p class="text-black-50 mb-2 fs-5">
              We have clothes that suits your style and which you're proud to
              wear. From women to men.
            </p>
            <ul class="social d-flex align-items-center py-3">
              <li>
                <a href="#" class="twit">
                  <i class="fab fa-twitter "></i>
                </a>
              </li>
              <li>
                <a href="#" class="face">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#" class="inst">
                  <i class="fab fa-instagram "></i>
                </a>
              </li>
              <li>
                <a href="#" class="git">
                  <i class="fab fa-github "></i>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2  mb-3 mt-4 ">
            <h5 class="sec-title fw-bold ms-4">Company</h5>
            <ul class="sec-links">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">Career</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3 mt-4">
            <h5 class="sec-title fw-bold ms-4">help</h5>
            <ul class="sec-links">
              <li>
                <a href="#">customer support</a>
              </li>
              <li>
                <a href="#">delivery details</a>
              </li>
              <li>
                <a href="#">terms & conditions </a>
              </li>
              <li>
                <a href="#">privacy policy</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2  mb-3 mt-4">
            <h5 class="sec-title fw-bold ms-4">faq</h5>
            <ul class="sec-links">
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#">manage deliveries</a>
              </li>
              <li>
                <a href="#">orders</a>
              </li>
              <li>
                <a href="#">payments</a>
              </li>
            </ul>
          </div>
          <div class="col-6 col-lg-2 mb-3 mt-4">
            <h5 class="sec-title fw-bold ms-4">resources</h5>
            <ul class="sec-links">
              <li>
                <a href="#">free ebooks </a>
              </li>
              <li>
                <a href="#">Development Tutorial</a>
              </li>
              <li>
                <a href="#">How to - Blog</a>
              </li>
              <li>
                <a href="#">Youtube Playlist</a>
              </li>
            </ul>
          </div>
        </div>

        <footer
          class=" text-black-50 text-capitalize pb-3 d-flex justify-content-between border-top border-3 border-secondary-subtle pt-3 ">
          <span class="fw-bold">shop.co &copy; 2000-2023, all rights reserved</span>

        </footer>
        <span class="payment-methods d-flex justify-content-end  gap-3 ">
          <img src="../assets/card/pngwing.com (2).png" alt="" class="rounded-2 bg-white "
            style="width: 50px; height: 50px" />
          <img src="../assets/card/pngwing.com (1).png" alt="" class="rounded-2 bg-white "
            style="width: 50px; height: 50px" />
          <img src="../assets/card/pngwing.com (3).png" alt="" class="rounded-2 bg-white "
            style="width: 50px; height: 50px" />
          <img src="../assets/card/pngwing.com (5).png" alt="" class="rounded-2 bg-white "
            style="width: 50px; height: 50px" />
          <img src="../assets/card/pngwing.com (4).png" alt="" class="rounded-2 bg-white "
            style="width: 55px; height: 50px" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerC",

  data() {
    return {
      email: "",
    };
  },
};
</script>

<style lang="scss" scoped>
ul {
  list-style: none;

  a {
    text-decoration: none;
  }
}

.main-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  letter-spacing: -2px;
  font-family: "poppins", sans-serif;

  @media (max-width: 912px) {
    font-size: 2.5rem;
  }

}

.sec-title {
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #000;

}

.sec-links {
  li {
    a {
      color: #777;
      text-transform: capitalize;
      margin: 0;
    }
  }
}

.eide-section {
  @media (max-width: 781px) {
    flex-direction: column !important;
    align-items: center !important;
  }

  .eide-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 250px;
    height: 50px;
    padding: 20px;
    margin-top: 30px;

    .eide-input {

      &:focus {
        box-shadow: none;
      }
    }
  }
}


.footer {

  .social {
    a {
      padding: 15px;
      border: 1px solid silver;
      border-radius: 50%;
      color: black;
      background-color: white;
      margin-right: 10px;
      transition: background-color 0.9s ease-in, color 0.7s ease;

      &:hover {
        transform: scale(1.1);
        box-shadow: 0 2.5px 5px rgba(0, 0, 0, 0.249);
      }

      &.twit:hover {
        background-color: #00BFFF;
        color: #fff;
      }

      &.face:hover {
        background-color: #1e90ff;
        color: #fff;
      }

      &.inst:hover {
        &.inst:hover {
          background: linear-gradient(45deg, #f58529d4, #dd2a7bc2, #8234afc8, #515cd4bd);
          color: #fff;
        }

        color: #fff;
      }

      &.git:hover {
        background-color: #000;
        color: #fff;
      }
    }
  }
}

footer {
  @media (max-width: 781px) {
    align-items: center !important;
    justify-content: center !important;

  }
}

.payment-methods {

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    cursor: pointer;

    &:hover {
      background-color: #f3f3f3;
    }
  }

  @media (max-width: 781px) {
    align-items: center !important;
    justify-content: center !important;

  }
}

.box {
  padding: 20px;
  position: relative;
  border-radius: 10px;

  &::before {
    content: "";
    background-color: #f3f3f3;
    position: absolute;
    border-radius: 10px;
    height: calc(100% - 150px);
    bottom: 0;
    left: 0px;
    width: 100%;
    z-index: -2;
  }
}


.button {
  cursor: pointer;
  position: relative;
  font-size: 13px;
  color: black;
  border: 2px solid white;
  border-radius: 30px;
  background-color: white;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  overflow: hidden;
  width: 250px;
  height: 50px;
  margin-top: 10px;


  @media (max-width: 912px) {
    padding: 10px;
  }

}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: inherit;
  color: white;
  scale: 0;
  z-index: -1;
  background-color: black;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.button:hover::before {
  scale: 3;
}

.button:hover {
  color: white;
  scale: .9;
  box-shadow: 0 0px 15px #f3f3f3;
}

.button:active {
  scale: 1;
}
</style>
