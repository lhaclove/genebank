<template>
    <front-base>
        <section id="news">
            <div class="container">
                <h4><b>Berita</b></h4>
                <br><br>
                <div class="row">
                    <div class="single_news_item news_news">                        
                        <div class="detail">
                            <br>
                            <!-- <h3>{{ title }}</h3> -->
                            <h3 class="color-2" style="text-align: center;padding-bottom: 5px;">Penandatanganan Perjanjian Kerjasama Pendampingan Pengelolaan Gene Bank Sayuran Nasional UGM dan EWINDO</h3>
                            <div class="expert">
                                <div class="left-side text-left" style="display: inline;">
                                    <p class="left_side">
                                        <span class="clock"><i class="fa fa-clock-o"></i></span>
                                        <span class="time">Kamis, 02 November 2017</span>
                                        <a href=""><span class="admin"><i class="fa fa-user"></i>admin</span></a>
                                        <a href=""><span class="right_msg text-right"><i class="fa fa-comments-o"></i></span>
                                        <span class="count">0</span></a>
                                        <!-- <span class="time">{{ date }}</span> -->
                                        <!-- <a href=""><span class="admin"><i class="fa fa-user"></i> {{ author }}</span></a> -->

                                    </p>
                                </div>
                            </div>
                            <div class="news_detail">
                            <img src="/img/news3.JPG" >
                        </div>
                            <!-- <p>{{ body }}</p> -->
                            <p> Pertukaran cendera mata antara Managing Director of PT East West Seed Indonesia (Ewindo) Glenn Pardede (kiri) dengan Rektor UGM Panut Mulyono seusai menandatangani perjanjian penyaluran hibah pembangunan dan operasional Bank Plasma Nutfah tanaman hortikultura di UGM, Yogyakarta.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </front-base>
</template>


<script>
import FrontBase from '../FrontBase';
import NewsList from './NewsList';

export default {

  name: 'berita3',
  
  components: {
      FrontBase,
      NewsList,
  }
}
</script>

<style lang="css" scoped>
h5{
    text-align: center;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
}
.news_detail img{
    height: 30%;
    width: 60%;
    align-items: middle;
    margin-bottom: 30px;
    margin-left: 20px;
}
p{
    margin: 20px;
}
</style>
