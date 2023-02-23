import React from 'react'
import { Helmet } from 'react-helmet'
import { icons } from '../../service/icons'

export default function Head() {
  return (
    <Helmet>
      <meta charset="UTF-8" />
      <meta name="title" content="AP'IN | Appeal of innovation" />
      <meta name="description" content="All you need to to succeed your digital transformation" />

      <meta property="og:url" content="https://www.appealofinnovation.com" />
      <meta property="og:type" content="article" />
      <meta property="og:title" content="Appeal of innovation" />
      <meta property="og:description" content="All you need to to succed your digital transformation" />
      <meta property="og:image" content="https://www.appealofinnovation.com/assets/media/images/hero/home-banner.png" />

      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Growth your digital .... " />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <link rel="shortcut icon" href={icons.lgLight} />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet" />
      <link rel="stylesheet" href="assets/style/main.css" />
      <link rel="canonical" href="https://appealofinnovation.com" />

      <title>AP’IN | Appeal of innovation</title>
    </Helmet>
  )
}
