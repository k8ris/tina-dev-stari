import React from 'react';

export default function Bio ({images}) {
  const locationBioImage= images.filter((image) => image.type === 'bio-image' ? image : '')[0].location;
  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-6 col-sm-12" >
        Tina Danilović
        tinolinaradulovic@gmail.com
        tinolina_art, instagram profil
        +381621803862
        </div>
        <div className="col-md-6 col-sm-12">
          <img src ={locationBioImage} alt="slika" className='imgBio'/>
        </div>  
      {/* Rođena u Beogradu 1984. godine.{'\n'} 

      Diplomirala na Fakultetu primenjenih umetnosti u Beogradu 2012. godine na odseku zidno slikarstvo. {'\n'}

      Danas radi i stvara u Beogradu iz oblasti slikarstva.{'\n'}

      Samostalne izložbe: {'\n'}

      2022 – Zubato sunce, samostalna izložba, Galerija Belgrade, Beograd{'\n'}
      2019 – Ko je ko?, UK Stari Grad, Beograd{'\n'}
      2019 – U mojim snovima živiš, O3one Art Space, Beograd{'\n'}
      2018 – The Queen of Ugliness, Mulherin, Toronto, Ontario, Canada{'\n'}
      2018 – Kraljica gabora, Ulična galerija, Beograd{'\n'}
      2015 – Samo ljudi, Galerija Štab, Beograd{'\n'}

      Aktivnosti i izložbe:

      2022 – Zubato sunce, samostalna izložba, Galerija Belgrade, Beograd{'\n'}
      2021 – Pogled u neočekivano, Umetnički paviljon ,,Cvijeta Zuzorić”, Beograd{'\n'}
      2019 – Ko je ko?, samostalna izložba, UK Stari Grad, Beograd{'\n'}
      2019 – Pokloni se II, grupna izložba, TransformArt galerija, Beograd{'\n'}
      2019 – Susret, X grupna izložba malog formata, Kulturni centar Eđšeg, Novi Sad{'\n'}
      2019 – Svežina, VIII grupna izložba malog formata, Kuća Đure Jakšića, Beograd{'\n'}
      2019 – U mojim snovima živiš, samostalna izložba, O3one Art Space, Beograd{'\n'}
      2019 – Art on Paper, Pier 36, NYC, USA{'\n'}
      2018 – The Queen of Ugliness, samostalna izložba, Mulherin, Toronto, Ontario, Canada{'\n'}
      2018 – Kraljica gabora, samostalna izložba, Ulična galerija, Beograd{'\n'}
      2018 – Treći klaster, grupna izložba, Galerija Pro3or, Beograd{'\n'}
      2018 – Novi ritam, VI grupna izložba malog formata, TransformArt galerija, Beograd{'\n'}
      2017 – 25. Art market, grupna izložba, Kuća kralja Petra, Beograd{'\n'}
      2017 – Mladi 2017, grupna izložba, Niš art fondacija, Beograd-Niš{'\n'}
      2017 – MiniFORMArt, grupna izložba malog formara, Noćna galerija petak, Beograd{'\n'}
      2016 – Mladi 2016, grupna izložba, Niš art fondacija, Beograd-Niš{'\n'}
      2015 – Samo ljudi, samostalna izložba, Galerija Štab, Beograd{'\n'}
      2015 – Otvoreni mesec galerije Štab, grupna izložba, Galerija Štab, Beograd{'\n'}
      2015 – Mladi 2015, grupna izložba, Niš art fondacija, Beograd-Niš{'\n'}
      2012 – Prasak, grupna izložba mladih umetnika, Kraljevo{'\n'}
      2011 – Bijenale studentskog crteža Srbije, Galerija Dom kulture Studentski grad, Beograd */}
      </div>
    </div>
  )
}