import { Box, Card, Image, CardBody, CardFooter, Heading, Text, CardHeader, SimpleGrid, Button } from '@chakra-ui/react';
import SideBar from '../components/Side_Bar';
import { studentlinks } from '../assets/constants/Side_Constants';
import { FaPlayCircle } from 'react-icons/fa';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line } from 'recharts';
import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./Animated";
import { easeQuadInOut } from "d3-ease";
import 'react-circular-progressbar/dist/styles.css';
import Badge1 from '../assets/images/badge-1.png'
import Badge2 from '../assets/images/badge-2.png'
import Badge5 from '../assets/images/badge-5.png'
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'
const courses = [
  {
    id: 1,
    title: 'Java Script',
    description: 'Java is a high-level, class-based, object-oriented programming language.',
    price: 450,
    duration: 3,
    progress: 37,
    imageUrl: 'data:image/jpeg;base64,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',
  },

  {
    id: 2,
    title: 'Node.js',
    description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine.',
    price: 300,
    duration: 2,
    progress: 10,
    imageUrl: 'data:image/jpeg;base64,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',
  },
  {
    id: 3,
    title: 'Java',
    description: 'Java is a high-level, class-based, object-oriented programming language.',
    price: 450,
    duration: 1,
    progress: 0,
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoE_q5nMYJb_-tAWycjy5qnZaQ0XhTcL0_cozayBityA&s',
  },
  {
    id: 4,
    title: 'React',
    description: 'React is a JavaScript library for building user interfaces.',
    price: 350,
    progress: 66,
    duration: 1,
    imageUrl: 'data:image/jpeg;base64,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',
  },
  {
    id: 5,
    title: 'Python',
    description: 'Python.',
    price: 300,
    duration: 1,
    progress: 89,
    imageUrl: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQBDgMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAwECBAUGB//EAEYQAAEDAgQDBQQFBwsFAQAAAAEAAgMEEQUSITEGE0EiUWFxkTJSgaEUFkKx0QcVI1OCksElMzRVcqKy4eLw8WJzk7PCVP/EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMEBQb/xAA2EQACAgEDAgMFBwIHAQAAAAAAAQIDEQQSIQUxE0FRIjJhcaEUFSMzUoHRNJEkQkNTweHwBv/aAAwDAQACEQMRAD8A8jY3sBfyXqHmEuaWkgjZAYB7Sw2O6ADK6w03QGALTa9jY+CWR4IsSCe7fRAFxGc2XwulkZDWOLgLb7KQLBpIBtoUgLZDrodPBLI0WykOItsobKLBqhsaLtYpbKSBzmMaC82HkpWZPgfYXHJPUEtpIS894bey6I0epm7DSzCMRk1kkbF4F34LVVRRG8scFrbf0mM/tu/BDhH0FvYqSjxOnv2BI0e5Y/5qHTBlKxi4alj3CN4EbibW8VzzqceUaxmmPcyxsVjuLwULVakS0UcFeSWiparTFgWQrTJZUiyrIiFQiCnkCCFQEIECYAgQIAEACALROyOvvvtokwGOnJBsLEpjyUkeZHF4GqQhonJLRY+v3IHkgSEFpLSQHHS6QFXSF+YZSL72KAL805zZru0226QyRNfl3DrDexUgEctmBgGjddUmykXEhOYZTY67qGxovZznXyn2R0UNlAGnuKzbKSG8tzdx5rKUisCqKk/OWJuikvyogS7xsbW+a9CmCjH5nPZJ5PrXC3DGFT4NHPNCHiS+VrXEBliRpbrosLbpKWEb1Uxccs8dxFRHDsXnpGSufGw9h19bEXsfHVdlUt0cs5bI7Z4RzO37zvVacEF45ZGW1vZTgYnFaOKspZJ2syyRi9z1tqQpwUjnUDzNTNLt29n8F5WoShPCOyp5iNc1QpFNC3NWkZEYFlq1TIwLLVomS0LcFaZJUqycEJgQVSYFUxAmAIEwQAIAEACABADYnljScoNrXSAu2bUERk2+XkgoBOXEAM1vsgQc/KSCzw38EhlvpFyOzrawUgLiLg/Nl6E+aTAuwkyhxaN1DKNL5Q27bX0tdZtlovHKR2i3oB6LKTKQ6OTUEt+SybNEhokv9kkXWMpFJC+Gu3ildqQQHdNu0F7Fb9hHHPuz1uHYhimGxSRUVSGRONwwtuGnwTnXCTyxQnOKwc6emmnmfNLLnkkddzjuSrWEsIhpt5Yv6C73h6J7g2mcx6nqm2GC8jf5Nq9No3/4VDHH0OJgjL0Jd0MhHyC8jXyxaju0y9k1vZodNiuaMzVxFOidci2o1stoyM2hT4nWGm50WyZngQ5hAuQtkyGKcN1omQ0VLTrboLrRMkrkJIsNxcKhFS0/AHL8UwKlpBsdCrAhAgTEwQAIAEACABAFoyBmB1DhrqkwQ5s7bMaG26XugYOm7NgwA5uiQZKl4DnNykXOt1IxgkbfMWhunz6IAu2awaCy2lh46KGUWMoINmC/cs2yi5bdzjlNxqs5MtDjKxrOY8WYxuum6zw5SwV2RFDQV2MgyCQQ0wNmm3VdsKoxXCMHNs2fVSbriB+DT+KvZH0FufqQOFJmuLo6/KT3NIJ+aZJb6sVP9Zu/vfimMj6sVP8AWTv734oygN+EYTJh0kz5akz52gAG+nqUvkAuonhhJzSNvfZpuVeGyG0ZJqp09FUn2W5Xad+iMCTKcNR56Bx92Y6fBq+W6xqvBvUceR7Ghq31tnVlps2awtfbReaupY7xZ1PTfEzVNO5ueQm4y2JauvT9RrseHwZT08ksmKRwzsBBFtSvVjI42jJIOwP7V7reLM2ipcG5rs06ErVEFC+7jZmmSxstESKDwGs7g0g+S0RJR782b/qdf70xFJXZ3lypCFqhAmAIECABAAgAQA2nI7Wm2vzSY0SJBdji0ta3ew3QBPMAYQAfa0KQyJCXkv1IvrfopArqd0APjkb2cwvbZZspE3BfceizbLRqztzvJ1a4W+KxkWhNeXTup6SEWfI4A/HQLXTR53Mm18HtPo7KOlipYhZrAG2C7Ec7ZkqauCmNpH3cPsjVaKOSHLBzpcUlJPLa1g6E6lUoEbzK+tqnH+ecPI2T2oNzKmrqbf0iT95GAyxbpZHe09x/aRgeWLAHxRgRob/QKgn3Xa/BRItHU/J8P0tLcXDqwelmr4zrf9dFfBHuaFfgM+sPLWnKGNNh7q5bJ7JdjaMco5GP4RDWUclRBGGVLBfsj2gOhWdlcbIb0sNFxk4vB8zr4WMk7F+12gvR6ff4lfPdHNqa1GXBkJGUAjZ116sWcjRR8zbG7d1vFmbEyStLr6jQhaohmd5Ba1vdfVaxZDFO0OiokqqAghUIhMAQJggAQAIAEAXjc1ubMbEi2yTGEkjnNY0n2QgBjHgRC97h1z2UmwLOfHeRpzXJBHZUjLiVjn+xpYjbfVSyi0coc1oN+zpbRZspDQ9lz2Dp4eSykUhzXMAcCDc9bLGRokXwRranieHNa0LC7XwFv4rtoWKzCz3jrYvihMz4aWzQ3Qv97y8F2Qh6nLOfPBxXEk3JWy4MyQ1z3ANFyUmwRoFGQLyPyD4feVDkWolTFT9Kph/bak5YHtI5VP8A/qZ++1G4eAMVPY3qm2/tNRkMGSvq2zNbQ0DeY551LRv/AL71z2WxhFyk8JGsK5SeI9z3vAGDmJ8LnAculaS8+9Ke71J9F8RKx6vVSv8ALyPeUfCrUPM9w8ZnkncqbPakyo8ImJv2TrcLShc4FP1Pl3ENPyKmaO1uVK5o8uinQPZqJVivWa1I4MjbL3YM4JIzvHeuqJk0JcAtombFO7gtUQUtorJKqgIKaEVTAlMTBAAgAQAIAPJIZBQA9jmcsAWve9rKWBErzI4uduUhmjPBmBy9kA3NlDKJY4FsQOhBudFDZSGhzcrgX9rNssZM0Q4WLnanbTquebLQqjIbjziNC6Mjzvb8F6WlacEct3EmaqgWmf3k31XeuxxvuKylxAbudkZEMramPDomtja18zxcNPTxP++iymzaKKUuCVeJFs1fLIC7Zgbd3p9lfOavrsISddEdz+n/AGerR09ySlY8HQHBT7aQ4ib9RHf/AOVw/fmt8ql9f5N/u+n9b+n8E/UiX9Tif/i/0p/fmu/2l9f5D7vp/W/p/AfUiTrDiZH/AG/9KPvvXP8A0l/Zh930frf0/g9FgHA74iHmE0sZ9qWY3kt4Dp/vRctj1mueb5Yj6GsIUUr2Fz6nuqemho6dtNTMyRM2/wCeq0cYxjsgHLeWMyn/AIWW0rJXmNY8DMM3cpVsYSG02j55xaP5Sqyer2/cFhp2/tmSrPyjy0nUr6GD4POkjK9dUTJiHLaJmxTlsiChWiJZVNCAqkIqmAJiYIAEACABAAkMEASbjzUsZbuPyKQGomJrhlA21020UMosxzS1ufUh9yFnIpDmvbkdYC5t0WMjRF4bt66EarCRojPVvbBiVNONBoCuvRT9k59RHnJ0q1tpGuOzhuvVi8nDLuRRtDpgegSl2CPJmwyNtdj00swzNgJLR00Nm/K5XzvXtTKrT4i+ZcHq9PqU7OfI+z4BhkNBh8Lsg58rA6R5311t5Ly9NRGmpep3zk5yOnnJOwt5LXeycIVJUsj/AJxzfILG3Vwq9+RSq3dhDsRaD2GOPiuSXVYL3Vk1WmfmLdX5rjln1WEuqZ42lLTkOrj0jF/NQ+pcYUSlR8RT6qV/Ww8Fzz1tsuFwWqooinBdKHbgapaVOVm5hZhLB4PiKcT1tS8ah0th8NP4Lu0ftahy9DG54hg89ILL34cHnyMz11xZkzO9bxMmKctkQ0UK0RLKJoQFUgKpiBMTBAAgAQAIAEhggMjmctsdz7SljGHllzr63b6JASTEAyxBJOqhlFW7keO6zkUh7De2qxkWh8a55mqCspjUUxa0dsG7fFKm3wp5fYdkN0QosShdAIK0lkjNMztl7kJrGUedKDT5NUNbh8JLhUsOlrZlTkSoNeQjhsg1lc4G4IBHiLlfLf8A0i/CrfxZ6/Te8vkfdOYyKkjdKbDILeizushVWpTf/sG8YuUntOdPWvmOWO7W9wXz9+vste2HCOyFKjyxPLkueyQuTwrfQ13RDlP90peBZ6BviHKf7pT8Cz0DevUOW/3SjwbPQN6AxyWNmFLwrPQN8RWI1Rw7DZJCQJHDKweJXZWvBhz3MpPdLCPnlY67gOjRb4r0en17Ybn5nPqJZeEc+VevA45GWTddUTKRneV0RMmKctkQyhVksoqQgKpAVTECYmCABAAgAQAIGCQYLAd4SYw6WG6lga3tiY/QAgB2l9z0UFFmhmSMm2hNws5DQ0GMMcABe4IWUkaItE7KCO9c8kaI2QPBcy+gC5pm0SZKSnqdJYgT3jQlZLU21e4y3XCfdF48EoHbxO/fKiXU9SvP6DWkpfkbaXDqWjzPpmFr3iziXX0Xka/WXXqKsfY66KK623FH0eqkMkUJdrZosO7RcuvulYo7jWiKTYlntttpquCt+0jeXYRir8VZUD83Ma6LLroDqvVs359k5oteZi53Ef6lv7o/FRm4fsBzuI/1TP3R+KM3BiBmqcXxelkEc5Yx5F7FgWbtsTwylCLEnH8S2L4x+wrjO19hbYo5lfXz1b81RIXkaAdG+S0hRObzMiU1FcHJmNzuvZqjhYOSTyzJIV2QRhIzSFdUTFszuW8TNiitYmbKlaYEUVIQFUgKoECYmCABAAgAQBaMAyNDjYdUMY1wYBJYg6hTkCwjgJIB7kmwQogDLbrukMnz1SAu0hZyLQ1tvC6ykWhzDqsJGiZpjK5po1iaGzBgXLOJrFkOrw3quaVeTaMjRhtUamSUX9lt7LztbXtimdNTzk+lz35MP9kfcuLWL2YmtXcTexBHRcKeHlG7WRn0iT3vktvtVnqR4URlMZ6iYRxuFz17gunSu7UWquL7mdqhXHczXUUs9PkfzA9pIB02Xo6vQ36dKW7KOeu2E+MHjOMH8quc8E9mEE/Nck1m1I1i8RPNtxDPe59V3qoxciTM140Oq6IQwZSZmkN11wiYtmWQrrijFszvK3iZMQ4reKM2LJWqIZQlWiSt1SAglUBCBAmJggAQAIAEACAyASGNgja++Y6Du0SYywEeZguXZtyCNFIFrMAPaBcCTa+40SGTLk5hDPZUMYxjxmvlG1lmy0PjsWt7y5YyRaGB1rgLnkjVCpHki6wlE0TMsryFk4miZbCa9tHXh0zjyngsf4dx9bfC65dXR4teF3RvVZtlyfVsJxennpo6askDJGgBj76PHgV4nE47Z9zq5jyjpGmdYFjgQdrhc09HPvFmqtXmVMEo+zf4rP7NYV4kR1G2annbIAO4i+4XZoo3ae5WIxucZx2l8Wx+mhjLHkZ/1bSHOJ/gvW1fUVZHalg5aqGnk+Y8WYwah8jC4c6UjM1pvy293yXLpKXZPxH2NbJpR2o4UMjl6u05WzXG8q4xIbLudouiMTJszvK6IozYh5W8UZtiXLZGbKFaJEZKFWIqU0BBVCBAAmIEACABAAgAQAJDGQszB98xdbQXAQwG5GZozrbS+3cpGS1oIY1xbo+xIHRSBYsYAScwIaBuFJQzlRg2z6W1UMomO2azngAbFZNFIY1wa+wNweqxlE0THPjDnSA6WGlljJGiZkfTk3KwaNEzPJSk3sDdQy0zRQVlbh7ckTs0P6p/sjy7vuXJfpare6w/U2hY4nZoeJ5IB7NRT9/Kku300XBLQTjzCRsrovujpM4xmy6V8/kYAT62Kh6XU/D+5XiQMtVxTJKC0yVkt/s5srT8/wCCcdDbL3pITtiuxyanFK2drmRNbTtPuau9f8l01aGqDy+WZyuk+xhZSuLszgS7q4m5PxXejHJqjgVJENjcoA6raKM2yj3aLeKM2xDitoozbEuK3SM2xbitESyhWiIKpgQVSQFUxAmJggAQAIAEACABAAgMl4g0k5hoAbBJjG8hgLLuvff0upGUDQ+UNvZpO6ALPYM12m7bA3spAtEGuGrttrdVDKRoDGuyEA9L6LNotDGtu21rWdZZyRSZeQhrgASdNVi4miZoY1pLb3tlusZRLTCNrHyWO2qxcTRMb9GhcDqfQeChxLTLCihPVZtPzHuINDBcdo2tqbJYaGpFhRQBocTpfXyRtYtwGnia1xF7jZNJhuDlszOaDa1rK4wJbFlrAWEuNiDstowM3IQ51w3T7VtO5axiQ2ImsC+19NrraKM2xbst/wBm/wAVqkSxDyMrT3i5WqIYpy0SJbKFUiSCqAi6pAQgQJiYIAEACABAAgAQAIABokMG9G9LoAfEwHluN7OdZSxlhGGtdlvawIUgWZG0yEjRtgQkykXaxmZva31+ChoeRkcBc7LFd8h2Y0alZSaSy+C1y8I7UPCmLyMvJCyNxHZZJI0OPwXnT6jpk+Hx8jojRY12MtXQT0NS6GqY6OQa5SN9tR3jVb1zhdHdB5RLjKPDGS4dUUtJT1MzckVRflEn2hve3lZYxnCc3Bd0U04rLJoqOSsm+j0ozzPBLG7dLlTa41x3S7FRzJ4R0cGw182NciSEObBIOaxx6dVy6myEatyfc1rT34Zp4jwt9PVyzsiaykBAblOxI7ljorozgot5ZV0HGTfkNxPDmzYLhP0KmvNJ7eRurtOqim3F0974KnD2Fg5lXgeI0sD55Kd3LbbMQQSB1vZdUNTTOW1SMnXNLJz+WZZSyIucTYNAFySV2YUVl9kZJt8HR+q2KOa08pjTluWGQZ/Rcy1+nT7vHyL8GbOPUwPgcI5o3RytPaY/car0K2pJSjyjnlmLwzTSYFiFbG98FPlbmsHyOytPxKizV0VPEpcjVM5c4IxPh+vw6HnVEN4cpvKxwc0eien11F0tsXyKdE4LL7HEeP0bD336r0EjnYoq0IqmICqSAqUxAmAIECABAAgAQAIAEACALwx8wuBJ08EhosI2hzbuJJ6AeKALcnKw3dYgn+H4pDKyNEby1pJA0SAi+1t0gHtaHEOB8FLGeo/Jy0fWN4d2rQm1+moXi9b406x6nboubP2OFVySy1tQ6Sd5kEjjmLzpqdj0XdVXGNSSXGDCcpb28nrcUP504Nw7EZ3ZqiI5HyW1cLlrvUgFeNpl4GvnSuzO232qFN9zLxI63CnDh76dv/raq0S/xd/z/wCRah/hQM3BdjxFSkb2f/gK26msaaX7E6Z/iIfCb8bO7RA+mWIBtfVZuP8Agc/ApSxf+5XizMccqGmRwbpdt9NlXToL7PF+YtRJ+Izq43VVFJwxhQpZnRCVuVxbuRbvXJpqY2auzcs4NbZtVxwZOB6qcYw6B8r5IpIiSx7iRcW7/MrbqdUY070uUydNNueGzRw1Sw0lVjOIZQ76G14iafs2zOP3BZayblGmv9XcdUcOUvQ8fLXVnONS+olMxJPMzG9/+V7UdPBR2Y4ON2y3Zyem4qAr8CwjGXNAneWxykaXBvc+rfmvK0DdWotoXZZZ03YlXGfmxX5RpHtxClhDnCLk6MBs30W3RoJ1zk++SNZJpxS9C/BU8k2C4xTSvMkLI7ta7W2hU9UgoaiqaXLY9NJuuSZ4driY2+AC+hxyeeF0xEEpoCCVSEQgATEwQAIAEACABAAgAQAIAbCNJDmIAbtfdJjRIgdp27b628LoAoxud2W9/FADRC4ud2+7fy/zUjJFLa5zfJICsLS6UNukxnrPybNtjr3lwzcl2lvELxuuf06+Z26L8z9jlV2AYqytlY+gnJfKSwMbmDgTobjQDzXRTrdNKpPeuF8jKdNm/hHpOIi3CeF6LBbg1JtI9o+yNXG/xOnkvN0Kep1ktSvd8jpufh0qvzKYhRy4vwZgsmH/AKb6JGGSsaO1o3KdO+7du4385psWn11qu43dipwlZTHb5CuD8Hrosehq30s0VPFnBdK0tvdpGl9dytOp6mmVDhGWW/QjSwkrE2sGYlkfG5lkkysbWAu9VsouWgwl5EZSv/cjjeCojx2eZ0b+S8NLHhpynTvU9LlCWnjHPKK1UXvbNXFLiOE8BJ0JBP8AdWOgWdXaXe/womTgF1+JYwdjA/7wturrGlb+KI0jbsN/DldB+esZwqrfy4q5z2Ncfeu4EeZB08lhrKJOmq6P+XBdU14koPzPOT4Ji0VY6hdQ1DpmuygtjJY4a9oO2sd/v2Xp16zTyq8XejldU9zSR2+L6iKjoMJwFkgfNT5X1BbqGuta3xLifgFw9Prdk7dS1w8pfydGokoqFSK/lKv+dqTp+g6+avoa/Cn8ydb78fkW4DucOxvoOTp46FT1Z/i0/MNHzCR4tnsN1B0C9/BwAUwKpoATECYAgQIAEACABAAgAQAIAEAF0AF/kgBrIHENIeLusALd5SGDWAskIcSWkAm2iQy/KILgZAbAn5pALaQHC5sO9DQHrvyaj+Xy4OzXgcD4G4Xi9c/p18zt0P5n7HHdjGJ0M9RBT4hVRMEjrMDzbc7dy61o6LYRlOCbwjF3WRk0mYTLLVSullqHvmPV7rkrpUIxWEsIz3NvLG4fXVtI94o6qWnJ9oseQDbvWdunqt/MjkcbJQ914PT8HSYniGORVdVVzz09NndI+R5LB2SNzpfVeT1KFNVDrqik35I7NNKcp7pN4PP4m81OI1lSx3Ykme9hB3Fzb5WXp6etwqivgctklKbYqbEq+albSzVcz6ca8pzyW+GiFpqlPeorIOyTW1vgXNWVM0McM1RLJFF/Nsc4kM8h0VxphFuSXInNtJMpT1U9LKJqaaSGQCwfG7KbJyqjNYksoSm4vKKSSOkeXvc5zyblxOt1pGKXCQm3nJtbj+Lsh5LcTqhHa1hKVz/YdPu3bFkvx7O2TnucS7MSS697k63XSopLGODLLzkZV1tTWva+sqJZ3tFmmR2YgdyIVwgsRWByk5PLIp6yqpg8U1RLEJBZ4Y4gOHilOqFmNyzgFJxWEIOi2IITQyECBMAQDBAgQAIAEACABAAgAQAIAEACALZ3WAzGw212QBAc4CwcQPNIYBzvePqgAugDdhOLVeDVYqqB7WyeyQ5oIIJ2XLqdPXfDbYso0rslCWYmN8rpZHSu9p5Lj53WsYqMUkKTy8g022VEjqarfQ1MdXGyOR8ZuGytzNPTUfFZXVqyDjnGfQut4kmbq3inFsWg5U9Ryqc3vDAMjT/E+V1z0dM09PtpZfxeTWy+yXGeDnZnd/S3wXZg5wLid/JGBkXQAIEBQBBQBCYEJgCEBBTEQmAJgCAYIECABAAgAQAIA//Z',
  }
  // Add more courses as needed
];
const data = [
  { name: 'jan-25', minutes: 440 },
  { name: 'jan-26', minutes: 360 },
  { name: 'jan-27', minutes: 120 },
  { name: 'jan-28', minutes: 100 },
  { name: 'jan-29', minutes: 240 },
  { name: 'jan-30', minutes: 10 },
  { name: 'today', minutes: 60 }

];
const ranks = [
  { name: 'jan-25', points: 12 },
  { name: 'jan-26',  points: 20 },
  { name: 'jan-27',  points: 46 },
  { name: 'jan-28',  points: 0 },
  { name: 'jan-29',  points: 59 },
  { name: 'jan-30',  points: 38 },
  { name: 'today',  points: 82 }

];
const topRank = [
  { name: 'johnpaul', rank: 1, ccourses: 450,points: 12000 },
  { name: 'jasonjason', rank: 2, ccourses: 450,points: 19999},
  { name: 'alicealice', rank: 3, ccourses: 449,points: 19988},
  { name: 'bobbob', rank: 4, ccourses: 447 ,points: 19990},
  { name: 'maria', rank: 5, ccourses: 455,points: 19990 },

]
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const dataPoint = payload[0].payload;
    
    return (
      <div className="custom-tooltip bg-gray-600 p-2 rounded">
        <p className="label text-white p-1">{` ${dataPoint.name}`}</p>
        <p className="points text-gray-400 text-xs p-1">Points: <span className='text-white'>{dataPoint.points}</span></p>
      </div>
    );
  }
  return null;
};


function ReturnRank() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>


      <Button colorScheme='teal' variant='link' onClick={onOpen}>
        Leaderboard
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size='2xl'  >
        <ModalOverlay bg='blackAlpha.600'
          backdropFilter='blur(10px) hue-rotate(0deg)' />
        <ModalContent>
          <ModalHeader backgroundColor='gray.800' color='white' textAlign='center'>Leader Board</ModalHeader>
          <ModalCloseButton color='gray.100' />
          <ModalBody backgroundColor='gray.800'>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Rank</Th>
                  <Th>Name</Th>
                  <Th>Completed Courses</Th>
                  <Th>Points</Th>
                </Tr>
                <Tr>
                  <Td className='text-white'>440<span className='text-gray-400 text-sm'> /5000</span></Td>
                  <Td className='text-gray-400'>Sanjeevi</Td>
                  <Td className='text-gray-400'>{completed}</Td>
                  <Td className='text-gray-400'>1020</Td>
                </Tr>
              </Thead>
              <Tbody>
                {topRank.map((rank) => {
                  if (rank.rank % 2 === 0) {
                    return (
                      <Tr className='bg-gray-900' key={rank.name}>
                        <Td className='text-white'>{rank.rank}</Td>
                        <Td className='text-white'>{rank.name}</Td>
                        <Td className='text-white'>{rank.ccourses}</Td>
                        <Td className='text-white'>{rank.points}</Td>
                      </Tr>
                    );
                  } else {
                    return ( <Tr className='bg-gray-700' key={rank.name}>
                    <Td className='text-white'>{rank.rank}</Td>
                    <Td className='text-white'>{rank.name}</Td>
                    <Td className='text-white'>{rank.ccourses}</Td>
                    <Td className='text-white'>{rank.points}</Td>
                  </Tr>); // You can use this line if you don't want to render anything for odd ranks
                  }
                })}

              </Tbody>
            </Table>
          </ModalBody>

          <ModalFooter backgroundColor='gray.800'>
            <Button colorScheme='teal' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
function ReturnFocus() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const finalRef = React.useRef(null)

  return (
    <>


      <Button colorScheme='teal' variant='link' onClick={onOpen}>
        Learn More
      </Button>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose} size='2xl'  >
        <ModalOverlay bg='blackAlpha.600'
          backdropFilter='blur(10px) hue-rotate(0deg)' />
        <ModalContent>
          <ModalHeader backgroundColor='gray.800'>This Week</ModalHeader>
          <ModalCloseButton color='gray.100' />
          <ModalBody backgroundColor='gray.800'>
            <BarChart width={600} height={400} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={(value) => `${value} mins`} />
              <Tooltip />
              <Legend />
              <Bar dataKey="minutes" fill="teal" />
            </BarChart>
          </ModalBody>

          <ModalFooter backgroundColor='gray.800'>
            <Button colorScheme='teal' variant='outline' mr={3} onClick={onClose}>
              Close
            </Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
const Basic = 95;
const Intermediate = 126;
const Hard = 24 ;
const completed = Basic + Intermediate + Hard;
const totalBasic = 120;
const totalIntermediate = 200;
const totalHard = 40;
const total = totalBasic + totalHard + totalIntermediate;
const percentage = (completed / total) * 100
const percentageBasic = Math.round((Basic / totalBasic) * 100);
const percentageIntermediate = Math.round((Intermediate / totalIntermediate) * 100);
const percentageHard = Math.round((Hard / totalHard) * 100);
const length = courses.length
const minuteMonthly = 180 * 2.1
const secondMonthly = 24
function Course() {
 
  return (
    <div className='flex flex-row'>
      <div className='fixed z-50'>
        <SideBar links={{ studentlinks: studentlinks, currentlinks: 'Dashboard' }} />
      </div>

        <div className='bg-gray-700 ml-64 h-full w-full'>
          <div className='bg-gray-800 text-3xl p-2 m-2 text-white rounded font-bold'>Welcome back <span className='text-teal-700'>Sanjeevi.,</span></div>
          <div style={{ display: 'flex', }}>
            <div className='bg-gray-800 p-2' style={{ width: '50%', margin: 5, marginBottom: 0, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
              <span className="text-xl font-bold text-white">Completed Courses</span>
              {/* <br /> */}
              {/* <span className=' text-2xl text-orange-400 font-bold'> {34} </span> */}
            </div>
            <div className='bg-gray-800 p-2' style={{ width: '50%', margin: 5, marginBottom: 0, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}>
              <span className="text-xl font-bold text-white">Points Earned<span className='float-right text-gray-400 text-sm'>this week</span></span>
              <br />
              <span className='text-1xl text-gray-400 font-bold'> 1020 </span>
            </div>

          </div>
          <div style={{ display: 'flex', }}>
            <div className='bg-gray-800' style={{ display: 'flex', width: '50%', alignItems: 'center', margin: 5, marginTop: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
              <div style={{ width: '50%', height: '100%', display: 'flex', padding: '5%' }}>
                <AnimatedProgressProvider
                  valueStart={0}
                  valueEnd={percentage}
                  duration={1.5}
                  easingFunction={easeQuadInOut}
                >
                  {value => {
                    // console.log(value)

                    return (
                      <CircularProgressbar
                        value={value}
                        text={
                          <tspan>
                            <tspan style={{ fontSize: '70%', fontWeight: 'bold', fill: 'orange' }}>
                              {Math.round(value * total / 100)}
                            </tspan>
                            {'\n'}
                            <tspan style={{ fontSize: '40%', fontWeight: 'bold', fill: 'gray' }}>
                              /{total}
                            </tspan>
                            {'\n'}
                            {/* <tspan style={{ fontSize: '30%', fill: 'gray', }}>Completed</tspan> */}
                          </tspan>
                        }
                        styles={buildStyles({
                          pathTransition: "none",
                          textSize: '100%',
                          textColor: 'lightgray',
                          pathColor: "orange",
                        })}
                      />
                    );
                  }}
                </AnimatedProgressProvider>
              </div>

              <div style={{ width: '50%', padding: '2%' }}>
                <Text className=' text-gray-400 text-white text-xs' >Basic Courses:<span className='text-xs text-white' style={{ float: 'right' }}>{Basic} <span className='text-gray-400' style={{ fontSize: 10 }}>/{totalBasic}</span></span></Text>
                <Box bg="teal.100" h="10px" w="100%" borderRadius="md" mb="15%">
                  <Box
                    bg="teal.600"
                    h="100%"
                    w={`${percentageBasic}%`}
                    borderRadius="md"
                  ></Box>
                  <Text className='text-gray-400 text-right' style={{ fontSize: 10 }}>
                    {percentageBasic}%
                  </Text>
                </Box>
                <Text className='text-gray-400 text-white text-xs' >Intermediate Courses:<span className='text-white-400 text-1xl' style={{ float: 'right' }}>{Intermediate}<span className='text-gray-400' style={{ fontSize: 10 }}> /{totalIntermediate}</span></span></Text>
                <Box bg="orange.100" h="10px" w="100%" borderRadius="md" mb="15%">
                  <Box
                    bg="orange.400"
                    h="100%"
                    w={`${percentageIntermediate}%`}
                    borderRadius="md"
                  ></Box>
                  <Text className='text-gray-400 text-right' style={{ fontSize: 10 }}>
                    {percentageIntermediate}%
                  </Text>
                </Box>
                <Text className='text-gray-400 text-white text-xs' >Advanced Courses:<span className='text-white text-1xl' style={{ float: 'right' }}>{Hard}<span className='text-gray-400' style={{ fontSize: 10 }}> /{totalHard}</span></span></Text>
                <Box bg="red.200" h="10px" w="100%" borderRadius="md" mb="15%">
                  <Box
                    bg="red.600"
                    h="100%"
                    w={`${percentageHard}%`}
                    borderRadius="md"
                  ></Box>
                  <Text className='text-gray-400 text-right' style={{ fontSize: 10 }}>
                    {percentageHard}%
                  </Text>
                </Box>
              </div>
            </div>

            <div className='bg-gray-800 relative' style={{ display: 'flex', width: '50%', alignItems: 'center', margin: 5, marginTop: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>

              <LineChart width={400} height={300} data={ranks} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                {/* <XAxis dataKey="name" /> */}
                {/* <YAxis /> */}
                {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
                <Tooltip content={<CustomTooltip payload={ranks}/>} />
                <Legend />
                <Line type="monotone" dataKey="points" stroke="#8884d8" />
                {/* <Line type="monotone" dataKey="minutes" stroke="#82ca9d" /> */}
              </LineChart>
              <div className='text-right absolute bottom-0 right-0 mb-4 mr-2'>
                <ReturnRank />
              </div>
            </div>
          </div>
          <div>

            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div className='bg-gray-800 p-2' style={{ width: '49%', borderTopLeftRadius: 10, borderTopRightRadius: 10, margin: 5, marginBottom: 0 }}>
                <Text className="text-xl font-bold text-white text-left " >Badges Earned</Text>
                <Text className="text-xl font-bold text-white text-left ">3</Text>
              </div>
              <Text style={{ width: '49%', borderTopLeftRadius: 10, borderTopRightRadius: 10, margin: 5, marginBottom: 0 }} className=" bg-gray-800 text-xl font-bold text-white p-2">Learning Hours<span className='float-right text-xs text-gray-400 p-2'>January-2024</span></Text>
            </div>

            <div style={{ display: 'flex' }}>
              <div className='bg-gray-800' style={{ display: 'flex', width: '50%', alignItems: 'center', padding: 10, justifyContent: 'space-evenly', margin: 5, marginTop: 0 }}>
                <img src={Badge1} width="20%" />
                <img src={Badge2} width="20%" />
                <img src={Badge5} width="20%" />
              </div>


              <div className='bg-gray-800' style={{ width: '50%', alignItems: 'center', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', margin: 5, marginTop: 0, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>


                <Box width="100%" mt={2} mr={2}>
                  <div className='flex'>

                    <span role="img" aria-label="Clock Emoji">
                      ⏰
                    </span>
                    <Text className='float-right text-xs text-gray-400 mt-2'>{minuteMonthly}mins {secondMonthly}s</Text>
                  </div>

                  <Box bg="teal.100" h="12px" borderRadius="md">
                    <Box
                      bg="teal.700"
                      h="100%"
                      width={`${(((minuteMonthly / 30) / 60) * 100)}%`}
                      borderRadius="md"
                      text={minuteMonthly}
                      textColor='teal.200'
                    ></Box>
                  </Box>
                </Box>
                <div className='text-right' >
                  <ReturnFocus />
                </div>
              </div>

            </div>
            <div className='bg-gray-800 text-gray-400 text-xs' style={{ width: '49%', padding: '10px', margin: 5, marginTop: -5, borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
              Recent Badges <br /><span className='text-white text-xl'>Expert Badge</span>
            </div>
            <div style={{ display: 'flex', width: '50%', alignItems: 'center' }}>
              <div style={{ width: '50%', height: '100%', display: 'flex', padding: '5%' }}>
              </div>

            </div>
          </div>
          
          <Text className='text-white text-2xl'>Enrolled Courses:</Text>
          {length != 0 ? (<>
          <SimpleGrid spacing={2} columns={[1, 2, 3, 4, 5]} mt='5' >
            {courses.map(course => (
              <Card key={course.id} maxH={'xs'} backgroundColor='gray.800'>
                <CardHeader>
                  <Heading size='md' className='text-white'>{course.title}</Heading>
                </CardHeader>
                <CardBody>
                  <Image
                    mx="auto"
                    width="100%"  // Set width to 100% for full width
                    maxH="100px"
                    src={course.imageUrl}
                    alt={`Course ${course.id}`}
                    borderRadius='lg'
                  />

                </CardBody>
                {/* <Divider /> */}
                <Text fontSize='x-small' textAlign='left' ml='2' className='text-white'>status :</Text>
                <Box mt={2} m={2}>
                  {/* <Text fontSize='x-small'>Progress:</Text> */}
                  <Box bg="teal.100" h="8px" borderRadius="md">
                    <Box
                      bg="teal.700"
                      h="100%"
                      width={`${course.progress}%`}
                      borderRadius="md"
                      text={course.progress}
                      textColor='teal.200'
                    ></Box>
                  </Box>
                </Box>
                <Text fontSize='x-small' textAlign='right' mr='2'><span className='text-teal-400'>{course.progress}%</span></Text>
                <CardFooter
                  maxH='10rem'
                  display="flex"
                  justifyContent="space-evenly"
                  alignItems="flex-end"
                  className='text-white'
                >
                  <FaPlayCircle size='20' cursor='pointer' onClick={() => { alert('h') }}></FaPlayCircle>

                  <Text fontSize='xs' color='gray.500' alignSelf='end' ml='3' display='flex'>
                    <span className='text-white'> Duration : </span>  <span className='text-gray-100 font-bold ml-1'> {course.duration}hrs</span>
                  </Text>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>

        </>) : (<div className="flex items-center justify-center ">
          <Text textAlign='center' fontSize={'x-large'}>No Courses were Enrolled..</Text>
        </div>)}
        </div>
    </div>

  );
}

export default Course;