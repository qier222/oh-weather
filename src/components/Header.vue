<template>
  <header>
    <div class="logo">
      <img src="@/assets/images/cloud-sun.svg" /> OH Weather
    </div>
    <ol class="links">
      <li>
        <a href="https://github.com/qier222/oh-weather">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g>
              <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
              <path
                d="M12 1A10.89 10.89 0 0 0 1 11.77 10.79 10.79 0 0 0 8.52 22c.55.1.75-.23.75-.52v-1.83c-3.06.65-3.71-1.44-3.71-1.44a2.86 2.86 0 0 0-1.22-1.58c-1-.66.08-.65.08-.65a2.31 2.31 0 0 1 1.68 1.11 2.37 2.37 0 0 0 3.2.89 2.33 2.33 0 0 1 .7-1.44c-2.44-.27-5-1.19-5-5.32a4.15 4.15 0 0 1 1.11-2.91 3.78 3.78 0 0 1 .11-2.84s.93-.29 3 1.1a10.68 10.68 0 0 1 5.5 0c2.1-1.39 3-1.1 3-1.1a3.78 3.78 0 0 1 .11 2.84A4.15 4.15 0 0 1 19 11.2c0 4.14-2.58 5.05-5 5.32a2.5 2.5 0 0 1 .75 2v2.95c0 .35.2.63.75.52A10.8 10.8 0 0 0 23 11.77 10.89 10.89 0 0 0 12 1"
              />
            </g>
          </svg>
          <span>GitHub</span>
        </a>
      </li>
    </ol>
  </header>
</template>

<script>
export default {
  name: "Hearder",
};
</script>

<style scoped>
header {
  display: flex;
  padding: 0 48px;
  height: 64px;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  border-bottom: 1px solid #eaeaea;
  background: #fafafa;
}
header .logo {
  font-size: 26px;
  font-weight: 600;
  font-style: italic;
  color: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
}
header .logo img {
  height: 24px;
  padding-right: 8px;
}
header ol {
  list-style: none;
}
header ol a {
  height: 30px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #242424;
  font-weight: 500;
  font-size: 16px;
  padding: 0 8px;
  border: 2px solid #242424;
  box-sizing: border-box;
  fill: #242424;
  text-decoration: none;
}
header ol a:hover {
  background: #242424;
  color: #fff;
  fill: #fff;
  transition: ease 0.2s;
}
header ol a:active {
  background: #000;
}
header ol svg {
  padding-right: 4px;
  height: 16px;
}
header ol span {
  padding-top: 1px;
}

@media (max-width: 768px) {
  header {
    padding: 0px 16px;
  }
}
</style>