import React from 'react';
import Layout from '../../components/Layout';
import AppBar from '../../components/AppBar';
import { Typography, Container, Box, Button, Grid } from '@material-ui/core';
import ParamBase from '../../components/Params';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import omit from 'lodash/omit';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: 64,
    fontSize: '1.2rem',
  },
  hero: {
    background: 'linear-gradient(21deg, rgba(59,59,59,1) 0%, rgba(204,204,204,1) 100%)',
    color: '#fff',
    padding: theme.spacing(8, 0),
  },
}));

const T = withStyles({
  h1: {
    fontWeight: 700,
    fontSize: '3rem',
    fontFamily: 'Roboto, sans-serif',
  },
  h3: {
    fontSize: '2rem',
  },
  h4: {
    fontSize: '1.5rem',
  },
  body1: {
    fontSize: '1.2rem',
  },
})(Typography);

const Param = withStyles({
  root: {
    fontSize: '1.2rem',
  },
})(ParamBase);

const Section = withStyles((theme) => ({
  root: ({ gutterTop = true, gutterBottom = false }) => ({
    paddingTop: gutterTop ? theme.spacing(6) : 0,
    paddingBottom: gutterBottom ? theme.spacing(6) : 0,
  }),
}))((props) => <Container {...omit(props, ['gutterTop', 'gutterBottom'])} />);

const BuyButton = withStyles((theme) => ({
  root: {
    padding: '16px 51px',
    margin: theme.spacing(2, 0, 0),
  },
}))(Button);

export default function Home() {
  const classes = useStyles();

  return (
    <Layout title="NEW///BREEZE — для дома">
      <>
        <AppBar />
        <Box classes={{ root: classes.container }}>
          <Box classes={{ root: classes.hero }}>
            <Container>
              <Grid container>
                <Grid item xs={6}>
                  <T variant="h1" gutterBottom>
                    Для дома
                  </T>
                  <T variant="body1" paragraph>
                    Нужно более развернуто написать, чем же этот продукт так хорош для дома. А справа какую-нибудь
                    фотку. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Sagittis vitae et leo duis ut. Arcu cursus euismod quis viverra nibh
                    cras pulvinar. Urna molestie at elementum eu facilisis.
                  </T>
                  <BuyButton color="primary" variant="contained" size="large">
                    Заказать
                  </BuyButton>
                </Grid>
              </Grid>
            </Container>
          </Box>
          <Section>
            <Grid container>
              <Grid item xs={6}>
                <img src="https://via.placeholder.com/500x350" alt="Для дома" />
              </Grid>
              <Grid item xs={6}>
                <T variant="h3" gutterBottom>
                  Технические характеристики
                </T>
                <T paragraph>
                  Корпус изделия выполнен из&nbsp;ЛДСП &laquo;ЭГГЕР&raquo; (Австрия), различной цветовой палитры, либо
                  с&nbsp;возможностью подбора индивидуального цветового решения относительно вашего интерьера.
                </T>
                <Param title="Уровень шума, дБ" value="35–41" />
                <Param title="Высота, мм" value="602–612" />
                <Param title="Ширина, мм" value="407" />
                <Param title="Глубина, мм" value="418" />
                <Param title="Толщина стенок, мм" value="16–18" gutterBottom />
                <T variant="h4" paragraph>
                  Двигатель
                </T>
                <Param title="Рабочий механизм" value="осевой" />
                <Param title="Мощность, Вт" value="200" />
                <Param title="Воздухообмен, м³/час" value="1210" />
                <Param title="Влагозащита" value="есть" />
                <Param title="Вес, кг" value="6.2" gutterBottom />
              </Grid>
            </Grid>
          </Section>
          <Section>
            <T variant="h3" gutterBottom>
              Фильтры
            </T>
          </Section>
          <Section>
            <Grid container>
              <Grid item xs={6}>
                <T variant="h4" gutterBottom>
                  ФилТек<sup>®</sup>
                </T>
                <T paragraph>
                  ФилТек<sup>&reg;</sup> 600-F5&nbsp;&mdash; для фильтров очистки воздуха, подаваемого в&nbsp;окрасочные
                  и&nbsp;иные камеры, требующие высокой степени очистки.
                </T>
                <T paragraph>Загрязненность очищаемого воздуха&nbsp;&mdash; до&nbsp;3&nbsp;мг/м&sup3;.</T>
                <T paragraph>
                  Имеет прогрессивную структуру (изготовлен с&nbsp;переменной поверхностной плотностью по&nbsp;толщине
                  полотна), что увеличивает пылеёмкость материала&nbsp;&mdash; гидрофобена.
                </T>
                <T paragraph>
                  ФилТек<sup>&reg;</sup> является слабогорючим полотном (группа горючести&nbsp;Г1) в&nbsp;соответствии
                  с&nbsp;<b>ГОСТ 30244</b>.
                </T>
                <T paragraph>
                  ФилТек<sup>&reg;</sup>&nbsp;&mdash; экологически безопасный фильтрующий материал для вентиляции
                  (в&nbsp;составе используется только экологически чистое сырьё), не&nbsp;вызывает аллергию, имеет
                  гигиеническое заключение, также имеет международный сертификат безопасности Oeko-Tex Standard 100
                  Class1.
                </T>
                <T paragraph>Основная сфера применение материала&nbsp;&mdash; очистка подаваемого воздуха.</T>
                <Param title="Класс очистки" value="F5" />
                <Param title="Начальное сопротивление, Па" value="от 20" />
                <Param title="Конечное сопротивление, Па" value="450" gutterBottom />
                <T paragraph>
                  Фильтрующий материал тонкой очистки используется в&nbsp;фильтрах очистки воздуха, вторая ступень
                  фильтрации&nbsp;&mdash; в&nbsp;системе вентиляции.
                </T>
                <T paragraph>
                  <b>Технология Meltblown TEDA</b>
                </T>
                <T paragraph>
                  <b>Средняя эффективность очистки по кварцевой пыли, %</b>
                  <br />
                  75
                </T>
                <T paragraph>
                  <b>Материал</b>
                  <br />
                  полиэфир и полипропилен
                </T>
                <T paragraph>
                  <b>Свойства</b>
                  <br />
                  комбинированные фильтрующие материалы
                </T>
                <T paragraph>
                  <b>Температура эксплуатации, °C</b>
                  <br />
                  -50 – +100
                </T>
              </Grid>
              <Grid item xs={6}>
                <img src="https://via.placeholder.com/500x350" alt="Для дома" />
              </Grid>
            </Grid>
          </Section>
          <Section>
            <Grid container>
              <Grid item xs={6}>
                <T variant="h4" gutterBottom>
                  Фильтры тонкой очистки воздуха F8
                </T>
                <T paragraph>
                  Используются в&nbsp;системах кондиционирования и&nbsp;вентиляции. Применяются в&nbsp;качестве фильтров
                  конечной ступени очистки (доочистки). Используются в&nbsp;больничных палатах, при производстве
                  продуктов питания и&nbsp;лекарств.
                </T>
                <T paragraph>Условия эксплуатации:</T>
                <Param title="Температура очищаемого воздуха, °C" value="-40 до +80" />
                <Param title="Относительная влажность воздуха, %" value="до 100" />
                <Param title={<span>Номинальная производительность, м&sup3;/час</span>} value="1000" />
                <Param title="Срок эксплуатации, час" value="до 4000" />
                <Param title="Средняя эффективность очистки кварцевой пыли, %" value="95" />
                <Param title="Размер частиц в проскоке, мкм" value="0.4" />
                <Param title="Начальный перепад давления, Па" value="от -150" />
                <Param title="Рекомендуемый конечный перепаад давления, Па" value="-450" />
              </Grid>
              <Grid item xs={6}>
                <img src="https://via.placeholder.com/500x350" alt="Для дома" />
              </Grid>
            </Grid>
          </Section>
          <Section>
            <Grid container>
              <Grid item xs={6}>
                <img src="https://via.placeholder.com/500x350" alt="Для дома" />
              </Grid>
              <Grid item xs={6}>
                <T variant="h4" gutterBottom>
                  Класс фильтра: HEPA<sup>®</sup> Н13, H14
                </T>
                <T paragraph>
                  <b>ТУ 28.25.14-001-96280271-2017</b>
                </T>
                <T paragraph>Класс очистки&nbsp;&mdash; H13-H14.</T>
                <T paragraph>
                  HEPA&nbsp;&mdash; фильтр абсолютной очистки, позволяет добиться стерильной атмосферы в&nbsp;помещении.
                  HEPA фильтры используются в&nbsp;медицинских учреждениях, хирургии, лабораториях, на&nbsp;предприятиях
                  пищевой промышленности, на&nbsp;производствах, где требуется стерильная обстановка.
                </T>
                <T paragraph>
                  Область применения&nbsp;&mdash; фильтр конечной ступени очистки в&nbsp;многоступенчатых системах
                  очистки.
                </T>
                <T paragraph>
                  Конструкция&nbsp;&mdash; алюминиевый корпус с&nbsp;гофрированной фильтрующей бумагой
                  и&nbsp;сепараторами из&nbsp;клея.
                </T>
                <T paragraph>
                  Фильтрующий материал&nbsp;&mdash; гофрированная фильтровальная бумага на&nbsp;основе ультра-
                  и&nbsp;микро-тонкого стекловолокна или полимерные бумаги.
                </T>
                <T paragraph>Условия эксплуатации:</T>
                <Param title="Температура, °С" value={<span>-40 &ndash; + 70</span>} />
                <Param title="Относительная влажность, %" value="до 100" />
                <Param title="Исходная запыленность, мг/м³" value="до 3" gutterBottom />
                <Param title="Начальное сопротивление, Па" value="от 150" gutterBottom />
                <T paragraph>Особенности:</T>
                <T paragraph component="ul">
                  <T component="li">абсолютная очистка воздуха;</T>
                  <T component="li">низкое начальное сопротивление;</T>
                  <T component="li">высокие показатели пылеемкости;</T>
                  <T component="li">пожаробезопасный материал.</T>
                </T>
              </Grid>
            </Grid>
          </Section>
        </Box>
      </>
    </Layout>
  );
}
