/**
 * Vietnam: A Journey Across the Clouds
 * Master Travel Itinerary Data
 * March 6–13, 2027 | Hanoi • Ha Long Bay • Sapa
 */

function mapLink(name, query = '') {
  const q = encodeURIComponent(query || name);
  return `<a href="https://www.google.com/maps/search/?api=1&query=${q}" target="_blank" rel="noopener noreferrer" class="place-map-link" title="Open ${name} on Google Maps">${name}</a>`;
}

const ITINERARY_DATA = [
  {
    id: 1,
    stopNumber: "STOP 1",
    dayLabel: "DAY 1",
    title: "ARRIVAL & OLD QUARTER",
    dates: "March 6, 2027 (Sat)",
    region: "Hanoi",
    regionColor: "#E63946",
    heroImage: "images/st joseph.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/st joseph.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "St. Joseph's Cathedral (Nhà Thờ Lớn)"
      },
      {
        src: "images/Du palace Hotel.jpeg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Du Palace Hotel (Hanoi Old Quarter)"
      },
      {
        src: "images/banh mi 25.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Bánh Mì 25 (25 Hàng Cá)"
      },
      {
        src: "images/the raw compound.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "The Raw Compound (Tây Hồ)"
      },
      {
        src: "images/pai oi.jpg",
        fallback: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        caption: "Morning Coffee at pai oi coffee"
      },
      {
        src: "images/Hoam Kiem Lake.jpg",
        fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        caption: "Hoàn Kiếm Lake Stroll"
      },
      {
        src: "images/Ngọc Sơn Temple.jpg",
        fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        caption: "Ngọc Sơn Temple & The Huc Bridge"
      },
      {
        src: "images/Giao Mua.jpeg",
        fallback: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        caption: "Tasting Session at Giao Mùa"
      },
      {
        src: "images/puppet show.jpg",
        fallback: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
        caption: "Thăng Long Water Puppet Show"
      },
      {
        src: "images/bun cha ta hanoi.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Traditional Hanoi Grilled Pork Bún Chả"
      },
      {
        src: "images/Ta hien street.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Tạ Hiện Beer Street (Bia Hơi)"
      },
      {
        src: "images/The halflington.jpg",
        fallback: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=1200&q=85",
        caption: "Craft Cocktails at The Haflington Bar"
      }
    ],
    tagline: "Van Transfer, Bánh Mì 25, The Raw Compound & Old Quarter Heritage",
    summary: "08:25 Land at Hanoi Airport -> Private van transfer straight to Du Palace Hotel -> Lunch at Bánh Mì 25 -> The Raw Compound & pai oi coffee -> Hotel rest -> St. Joseph's Cathedral -> 87 Mã Mây -> Hoàn Kiếm Lake -> Drinks at Giao Mùa -> Water Puppet Show -> Bún Chả dinner -> Tạ Hiện Beer Street -> The Haflington Bar",
    highlightPoints: [
      `08:25: Land at ${mapLink("Hanoi Airport", "Noi Bai International Airport Terminal 2 Hanoi")}`,
      `Private van transfer straight to ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} (drop bags / early check-in)`,
      `Lunch at ${mapLink("Bánh Mì 25", "Banh Mi 25 25 Hang Ca Hanoi")} (25 Hàng Cá)`,
      `Head to ${mapLink("The Raw Compound", "The Raw Compound 180 De La Thanh Hanoi")} (Tây Hồ) & coffee at ${mapLink("pai oi coffee", "pai oi coffee Hanoi")}`,
      `Return to ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} to rest / freshen up`,
      `${mapLink("St. Joseph's Cathedral", "St Joseph Cathedral Hanoi")} ➔ ${mapLink("87 Mã Mây Heritage House", "87 Ma May Hanoi")} ➔ ${mapLink("Hoàn Kiếm Lake", "Hoan Kiem Lake Hanoi")} & ${mapLink("Ngọc Sơn Temple", "Ngoc Son Temple Hanoi")}`,
      `Drinks & tasting session at ${mapLink("Giao Mùa", "Giao Mua 77 Lo Su Hanoi")}`,
      `${mapLink("Thăng Long Water Puppet Show", "Thang Long Water Puppet Theatre Hanoi")}`,
      `Dinner: Traditional Hanoi grilled pork ${mapLink("Bún Chả", "Bun Cha Dac Kim 1 Hang Manh Hanoi")}`,
      `${mapLink("Tạ Hiện Beer Street", "Ta Hien Beer Street Hanoi")} (Bia Hơi) ➔ Cocktails at ${mapLink("The Haflington Bar", "The Haflington 94 Hang Ma Hanoi")}`
    ],
    detailedSchedule: [
      { time: "08:25", icon: "plane-arrival", event: `Land at ${mapLink("Hanoi Airport", "Noi Bai International Airport Terminal 2 Hanoi")}` },
      { time: "", icon: "car", event: `Private van transfer straight to ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} (drop bags / early check-in)` },
      { time: "", icon: "utensils", event: `Lunch at ${mapLink("Bánh Mì 25", "Banh Mi 25 25 Hang Ca Hanoi")} (25 Hàng Cá)` },
      { time: "", icon: "coffee", event: `Head to ${mapLink("The Raw Compound", "The Raw Compound 180 De La Thanh Hanoi")} (Tây Hồ) & coffee at ${mapLink("pai oi coffee", "pai oi coffee Hanoi")}` },
      { time: "", icon: "car", event: `Return to hotel to rest / freshen up` },
      { time: "", icon: "camera", event: `${mapLink("St. Joseph's Cathedral", "St Joseph Cathedral Hanoi")}` },
      { time: "", icon: "landmark", event: `${mapLink("87 Mã Mây Heritage House", "87 Ma May Hanoi")}` },
      { time: "", icon: "camera", event: `${mapLink("Hoàn Kiếm Lake", "Hoan Kiem Lake Hanoi")} & ${mapLink("Ngọc Sơn Temple", "Ngoc Son Temple Hanoi")}` },
      { time: "", icon: "coffee", event: `Drinks & tasting session at ${mapLink("Giao Mùa", "Giao Mua 77 Lo Su Hanoi")}` },
      { time: "", icon: "camera", event: `${mapLink("Thăng Long Water Puppet Show", "Thang Long Water Puppet Theatre Hanoi")}` },
      { time: "", icon: "utensils", event: `Dinner: Traditional Hanoi grilled pork ${mapLink("Bún Chả", "Bun Cha Dac Kim 1 Hang Manh Hanoi")}` },
      { time: "", icon: "utensils", event: `${mapLink("Tạ Hiện Beer Street", "Ta Hien Beer Street Hanoi")} (Bia Hơi)` },
      { time: "", icon: "coffee", event: `Cocktails at ${mapLink("The Haflington Bar", "The Haflington 94 Hang Ma Hanoi")}` }
    ],
    quickStats: {
      duration: "Full Day (Day 1)",
      pace: "Arrival & Heritage",
      transport: "Private Van & Foot",
      bestPhotoSpot: "St. Joseph's Cathedral square"
    },
    coordinates: { lat: 21.0333, lng: 105.8500, query: "Hanoi+Old+Quarter" }
  },
  {
    id: 2,
    stopNumber: "STOP 2",
    dayLabel: "DAY 2",
    title: "HA LONG BAY & COZY BAY GRAND CRUISE",
    dates: "March 7, 2027 (Sun)",
    region: "Ha Long Bay",
    regionColor: "#2A9D8F",
    heroImage: "images/stop2-halong-cruise.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/stop2-halong-cruise.jpg",
        fallback: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
        caption: "Ha Long Bay Luxury Cruise & Karsts"
      },
      {
        src: "images/Sung sot cave.jpg",
        fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        caption: "Sửng Sốt (Surprise Cave) Formations"
      },
      {
        src: "images/Ti top island.jpg",
        fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        caption: "Ti Top Island Peak & Beach"
      },
      {
        src: "images/Luon cave.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Luồn Cave Emerald Lagoon Kayaking"
      },
      {
        src: "images/stop2-halong-sunset.jpg",
        fallback: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
        caption: "Sunset Over Ha Long Bay Karsts"
      },
      {
        src: "images/halong-karsts.jpg",
        fallback: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=85",
        caption: "Majestic Limestone Karsts of Ha Long"
      },
      {
        src: "images/halong-boat.jpg",
        fallback: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
        caption: "Tender Boat & Bay Exploration"
      }
    ],
    tagline: "Cozy Bay Grand Cruise, Sửng Sốt Cave, Ti Top Island & Sunset Party",
    summary: "07:45 Private van departs Du Palace Hotel to Ha Long pier -> ~11:30–12:00 Arrive Tuần Châu Harbor & tender to Cozy Bay Grand Cruise -> Welcome drink, safety briefing & buffet lunch -> Afternoon excursions: Sửng Sốt Cave, Ti Top Island & Luồn Cave kayaking -> Sundeck Sunset Party (Happy Hour) + Vietnamese fresh spring roll cooking class -> Dinner in cruise restaurant -> Evening: Squid fishing on deck & relaxing",
    highlightPoints: [
      `07:45: Private van departs ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} to Ha Long pier`,
      `~11:30–12:00: Arrive ${mapLink("Tuần Châu Harbor", "Tuan Chau Harbor Ha Long")} & tender to Cozy Bay Grand Cruise`,
      "Welcome drink, safety briefing & buffet lunch cruising past karsts",
      `Explore ${mapLink("Sửng Sốt Cave", "Sung Sot Cave Ha Long Bay")} (Surprise Cave)`,
      `Visit ${mapLink("Ti Top Island", "Ti Top Island Ha Long Bay")} (panoramic hike or beach)`,
      `Kayaking or bamboo boat at ${mapLink("Luồn Cave", "Luon Cave Ha Long Bay")}`,
      "Sundeck Sunset Party (Happy Hour) + spring roll cooking class",
      "Dinner in the cruise restaurant & squid fishing on deck"
    ],
    detailedSchedule: [
      { time: "07:45", icon: "bus", event: `Private van departs ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} to Ha Long pier` },
      { time: "~11:30", icon: "anchor", event: `Arrive ${mapLink("Tuần Châu Harbor", "Tuan Chau Harbor Ha Long")} & tender to Cozy Bay Grand Cruise` },
      { time: "", icon: "utensils", event: "Welcome drink, safety briefing & buffet lunch cruising past karsts" },
      { time: "", icon: "camera", event: `Explore ${mapLink("Sửng Sốt Cave", "Sung Sot Cave Ha Long Bay")} (Surprise Cave)` },
      { time: "", icon: "compass", event: `Visit ${mapLink("Ti Top Island", "Ti Top Island Ha Long Bay")} (panoramic hike or beach)` },
      { time: "", icon: "anchor", event: `Kayaking or bamboo boat at ${mapLink("Luồn Cave", "Luon Cave Ha Long Bay")}` },
      { time: "", icon: "sunrise", event: "Sundeck Sunset Party (Happy Hour) + spring roll cooking class" },
      { time: "", icon: "utensils", event: "Dinner in the cruise restaurant" },
      { time: "", icon: "coffee", event: "Evening: Squid fishing on deck, karaoke & relaxing" }
    ],
    quickStats: {
      duration: "Overnight Cruise (Day 2-3)",
      pace: "Scenic Sailing & Caves",
      transport: "Expressway Van & Cruise",
      bestPhotoSpot: "Ti Top Island summit panorama"
    },
    coordinates: { lat: 20.9101, lng: 107.1839, query: "Ha+Long+Bay+Vietnam" }
  },
  {
    id: 3,
    stopNumber: "STOP 3",
    dayLabel: "DAY 3",
    title: "BAY SUNRISE, HANOI & SAPA SLEEPER TRAIN",
    dates: "March 8, 2027 (Mon)",
    region: "Ha Long & Hanoi",
    regionColor: "#D62828",
    heroImage: "images/Temple of literature.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/Temple of literature.jpg",
        fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        caption: "Temple of Literature (Văn Miếu - Quốc Tử Giám)"
      },
      {
        src: "images/Hao Lo Prison.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Hỏa Lò Prison Relic Historical Site"
      },
      {
        src: "images/Du palace Hotel.jpeg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Du Palace Hotel Day-Use Room (Shower & Rest)"
      },
      {
        src: "images/stop2-halong-sunset.jpg",
        fallback: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85",
        caption: "Sunrise Scenic Cruising past Heritage Karsts"
      }
    ],
    tagline: "Sunrise Tai Chi, Day-Use Hotel Rest, Historic Hanoi & Overnight Luxury Sleeper Train",
    summary: "Sunrise Tai Chi on sundeck + light breakfast -> Morning cruising past rock islets ➔ Early brunch -> 11:00–11:30 Disembark & van back to Hanoi -> Day-use room at Du Palace Hotel to shower & unpack -> Afternoon visit: Hỏa Lò Prison OR Temple of Literature -> Relaxed Old Quarter dinner -> 21:15 Leave for Hanoi Railway Station -> ~22:00 Board luxury sleeper train to Lao Cai / Sapa",
    highlightPoints: [
      "Sunrise Tai Chi on sundeck + light breakfast",
      "Morning scenic cruising past rock islets ➔ Early brunch on board",
      `11:00–11:30: Disembark harbor & private van transfer back to Hanoi`,
      `Check into day-use room at ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} to shower, unpack & rest`,
      `Afternoon visit: ${mapLink("Hỏa Lò Prison", "Hoa Lo Prison Relic Hanoi")} OR ${mapLink("Temple of Literature", "Temple of Literature Hanoi")} (choose on the spot)`,
      "Relaxed dinner in Old Quarter",
      `21:15: Leave hotel for ${mapLink("Hanoi Railway Station", "Hanoi Railway Station 120 Le Duan")}`,
      `~22:00: Board luxury overnight sleeper train to Lao Cai / Sapa`
    ],
    detailedSchedule: [
      { time: "", icon: "sunrise", event: "Sunrise Tai Chi on sundeck + light breakfast" },
      { time: "", icon: "anchor", event: "Morning scenic cruising past heritage rock islets ➔ Early brunch on board" },
      { time: "11:00", icon: "bus", event: `Disembark harbor & private van transfer back to Hanoi` },
      { time: "", icon: "car", event: `Check into day-use room at ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} to shower, unpack & rest` },
      { time: "", icon: "landmark", event: `Afternoon visit: ${mapLink("Hỏa Lò Prison", "Hoa Lo Prison Relic Hanoi")} OR ${mapLink("Temple of Literature", "Temple of Literature Hanoi")}` },
      { time: "", icon: "utensils", event: "Relaxed dinner in Old Quarter" },
      { time: "21:15", icon: "car", event: `Leave hotel for ${mapLink("Hanoi Railway Station", "Hanoi Railway Station 120 Le Duan")}` },
      { time: "~22:00", icon: "train", event: `Board luxury overnight sleeper train to Lao Cai / Sapa` }
    ],
    quickStats: {
      duration: "Full Day & Overnight Train (Day 3-4)",
      pace: "Bay to Capital & Overnight Rail",
      transport: "Cruise, Van & Sleeper Train",
      bestPhotoSpot: "Temple of Literature pavilion"
    },
    coordinates: { lat: 21.0245, lng: 105.8412, query: "Hanoi+Railway+Station" }
  },
  {
    id: 4,
    stopNumber: "STOP 4",
    dayLabel: "DAY 4",
    title: "SAPA CLOUD RIDGE & CAFES",
    dates: "March 9, 2027 (Tue)",
    region: "Sapa",
    regionColor: "#1D3557",
    heroImage: "images/sun plaza.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/sun plaza.jpeg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Sun Plaza Sapa & European Architecture"
      },
      {
        src: "images/Pi Boutique Sapa.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Pi's Boutique Hotel Sapa (Warm Phở Breakfast)"
      },
      {
        src: "images/Cafe 1600.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Cafe 1600 Sea-of-Clouds Terrace"
      },
      {
        src: "images/Moana Sapa.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Moana Sapa Mountain Cloud Realm"
      },
      {
        src: "images/stop4-muong-hoa-train.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Viettrekking Sapa (Terrace View of Red Mountain Train)"
      },
      {
        src: "images/O Quy Ho Restaurant.jpg",
        fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        caption: "Ô Quy Hồ Restaurant (Pumpkin Chicken & Sturgeon Hotpot)"
      },
      {
        src: "images/Sapa Stone Church.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Sapa Stone Church & Sapa Lake Evening Walk"
      }
    ],
    tagline: "06:00 Train Arrival, Sea-of-Clouds Hunting, Viettrekking Train Views & Sturgeon Hotpot",
    summary: "06:00 Arrive Lao Cai Station ➔ Van up to Sapa town -> Drop bags at Pi's Boutique Hotel Sapa & Phở breakfast -> Morning cloud hunting: Cafe 1600 & Moana Sapa -> Lunch & hotel check-in -> Photos at Sun Plaza ➔ Viettrekking Sapa (terrace view of red train) -> Dinner at Ô Quy Hồ Restaurant -> Evening walk around Stone Church & Sapa Lake",
    highlightPoints: [
      `06:00: Arrive ${mapLink("Lao Cai Station", "Lao Cai Railway Station")} ➔ Van up to Sapa town`,
      `Drop bags at ${mapLink("Pi's Boutique Hotel Sapa", "Pi Boutique Hotel Sapa")} & warm noodle breakfast (Phở)`,
      `Morning cloud hunting: ${mapLink("Cafe 1600", "Cafe 1600 Sapa")} & ${mapLink("Moana Sapa", "Moana Sapa 68 Violet")}`,
      `Photos at ${mapLink("Sun Plaza", "Sun Plaza Sapa")} ➔ ${mapLink("Viettrekking Sapa", "Viettrekking Sapa")} (view of red mountain train)`,
      `Dinner at ${mapLink("Ô Quy Hồ Restaurant", "Nha Hang O Quy Ho 8 Thach Son Sapa")} (pumpkin-stewed chicken & sturgeon hotpot)`,
      `Evening walk around ${mapLink("Sapa Stone Church", "Sapa Stone Church")} & ${mapLink("Sapa Lake", "Sapa Lake")}`
    ],
    detailedSchedule: [
      { time: "06:00", icon: "train", event: `Arrive ${mapLink("Lao Cai Station", "Lao Cai Railway Station")} ➔ Van up to Sapa town` },
      { time: "", icon: "utensils", event: `Drop bags at ${mapLink("Pi's Boutique Hotel Sapa", "Pi Boutique Hotel Sapa")} & warm noodle breakfast (Phở)` },
      { time: "", icon: "coffee", event: `Morning cloud hunting: ${mapLink("Cafe 1600", "Cafe 1600 Sapa")} & ${mapLink("Moana Sapa", "Moana Sapa 68 Violet")}` },
      { time: "", icon: "utensils", event: `Lunch in town ➔ Check-in at ${mapLink("Pi's Boutique Hotel Sapa", "Pi Boutique Hotel Sapa")} & rest / nap` },
      { time: "", icon: "camera", event: `Photos at ${mapLink("Sun Plaza", "Sun Plaza Sapa")}` },
      { time: "", icon: "train", event: `${mapLink("Viettrekking Sapa", "Viettrekking Sapa")} (terrace view of red mountain train)` },
      { time: "", icon: "utensils", event: `Dinner at ${mapLink("Ô Quy Hồ Restaurant", "Nha Hang O Quy Ho 8 Thach Son Sapa")}` },
      { time: "", icon: "camera", event: `Evening walk around ${mapLink("Sapa Stone Church", "Sapa Stone Church")} & ${mapLink("Sapa Lake", "Sapa Lake")}` }
    ],
    quickStats: {
      duration: "Full Day (Day 4)",
      pace: "Scenic & Highland Cafes",
      transport: "Van & Foot",
      bestPhotoSpot: "Viettrekking terrace view of train"
    },
    coordinates: { lat: 22.3364, lng: 103.8438, query: "Sapa+Vietnam" }
  },
  {
    id: 5,
    stopNumber: "STOP 5",
    dayLabel: "DAY 5",
    title: "FANSIPAN PEAK & GLASS SKYWALK",
    dates: "March 10, 2027 (Wed)",
    region: "Sapa",
    regionColor: "#457B9D",
    heroImage: "images/stop5-fansipan-peak.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/stop5-fansipan-peak.jpg",
        fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        caption: "Fansipan 3,143m Summit Pyramid ('Roof of Indochina')"
      },
      {
        src: "images/Ga Mường Hoa - Sun Station.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Ga Mường Hoa - Sun Station Monorail"
      },
      {
        src: "images/stop5-fansipan-cablecar.jpg",
        fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        caption: "Sun World Fansipan Legend Cable Car Ascent"
      },
      {
        src: "images/stop5-fansipan-pagoda.jpg",
        fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        caption: "Fansipan Cloud Realm Pagoda Complex"
      },
      {
        src: "images/Glass bridge.jpg",
        fallback: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=85",
        caption: "Rồng Mây 300m Cliff Elevator & Glass Skywalk"
      },
      {
        src: "images/Red Dzao House.jpg",
        fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        caption: "Red Dzao House (Herbal Salmon Hotpot by Fireplace)"
      }
    ],
    tagline: "Private Charter Car, 3,143m Roof of Indochina, Rong May 300m Cliff Elevator & Red Dzao House",
    summary: "Private charter car day -> Mường Hoa monorail ➔ Cable car ➔ Đỗ Quyên funicular directly to Fansipan Peak (3,143m) -> Drive through Ô Quy Hồ Pass ➔ Rồng Mây Glass Bridge -> Cozy dinner at Red Dzao House (salmon hotpot by fireplace)",
    highlightPoints: [
      "Private charter car day (flexible timing)",
      `${mapLink("Mường Hoa monorail", "Muong Hoa Station Sun Plaza Sapa")} ➔ ${mapLink("Cable car through the clouds", "Sun World Fansipan Legend Sapa")} ➔ ${mapLink("Đỗ Quyên summit funicular", "Do Quyen Station Fansipan")} directly to ${mapLink("Fansipan Peak (3,143m)", "Fansipan Peak 3143m")}`,
      `Drive through scenic ${mapLink("Ô Quy Hồ Pass", "O Quy Ho Pass Lai Chau Sapa")} ➔ ${mapLink("Rồng Mây Glass Bridge", "Rong May Glass Bridge Lai Chau")} (300m cliff elevator)`,
      `Cozy dinner at ${mapLink("Red Dzao House", "Red Dzao House 4B Thac Bac Sapa")} (herbal salmon hotpot)`
    ],
    detailedSchedule: [
      { time: "", icon: "car", event: "Private charter car day (flexible timing)" },
      { time: "", icon: "train", event: `${mapLink("Mường Hoa monorail", "Muong Hoa Station Sun Plaza Sapa")}` },
      { time: "", icon: "mountain", event: `${mapLink("Cable car through the clouds", "Sun World Fansipan Legend Sapa")}` },
      { time: "", icon: "mountain", event: `${mapLink("Đỗ Quyên funicular", "Do Quyen Station Fansipan")} to ${mapLink("Fansipan Peak (3,143m)", "Fansipan Peak 3143m")}` },
      { time: "", icon: "utensils", event: "Lunch break (station plaza / town)" },
      { time: "", icon: "car", event: `Drive through scenic ${mapLink("Ô Quy Hồ Pass", "O Quy Ho Pass Lai Chau Sapa")}` },
      { time: "", icon: "camera", event: `${mapLink("Rồng Mây Glass Bridge", "Rong May Glass Bridge Lai Chau")}` },
      { time: "", icon: "utensils", event: `Cozy dinner at ${mapLink("Red Dzao House", "Red Dzao House 4B Thac Bac Sapa")}` }
    ],
    quickStats: {
      duration: "Full Day (Day 5)",
      pace: "High Mountain Summit",
      transport: "Private Car, Monorail & Funicular",
      bestPhotoSpot: "Fansipan 3,143m peak summit marker"
    },
    coordinates: { lat: 22.3033, lng: 103.7753, query: "Fansipan+Peak" }
  },
  {
    id: 6,
    stopNumber: "STOP 6",
    dayLabel: "DAY 6",
    title: "BAN MONG RIDES, PARAGLIDING & VALLEY",
    dates: "March 11, 2027 (Thu)",
    region: "Sapa Valley",
    regionColor: "#E76F51",
    heroImage: "images/Paragliding.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/Paragliding.jpeg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Tandem Paragliding over Mường Hoa Valley"
      },
      {
        src: "images/Alpine.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Bản Mòng Fun Fair: Alpine Coaster Ride"
      },
      {
        src: "images/Rainbow Glide.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Rainbow Glide Slide at Bản Mòng"
      },
      {
        src: "images/catcatvillage.jpg",
        fallback: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85",
        caption: "Panoramic Terrace Cafes overlooking Cat Cat Village"
      },
      {
        src: "images/Cho Tinh Quan.jpg",
        fallback: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=85",
        caption: "Chợ Tình Quán (Mountain Hotpot & Fresh Greens)"
      }
    ],
    tagline: "Alpine Coaster, Rainbow Slide, Tandem Paragliding & Cat Cat Terraces",
    summary: "Bản Mòng Fun Fair: Alpine Coaster & Rainbow Glide slide -> Paragliding window: Tandem flight over Mường Hoa valley -> Relaxed lunch near Tả Van -> Roadside scenic terrace cafes overlooking Cat Cat Village -> Dinner at Chợ Tình Quán (fresh hotpot & mountain greens)",
    highlightPoints: [
      `${mapLink("Bản Mòng Fun Fair", "Ban Mong Fun Fair Sapa")}: Alpine Coaster ride & Rainbow Glide slide`,
      `Paragliding window: Tandem flight over ${mapLink("Mường Hoa valley", "Muong Hoa Valley Sapa")}`,
      "Relaxed lunch near Tả Van landing zone",
      `Roadside scenic terrace cafes overlooking ${mapLink("Cat Cat Village", "Cat Cat Village Sapa")}`,
      `Dinner at ${mapLink("Chợ Tình Quán", "Cho Tinh Quan Fansipan Sapa")} (fresh hotpot & mountain greens)`
    ],
    detailedSchedule: [
      { time: "", icon: "mountain", event: `${mapLink("Bản Mòng Fun Fair", "Ban Mong Fun Fair Sapa")}: Alpine Coaster & Rainbow Glide` },
      { time: "", icon: "compass", event: `Paragliding: Tandem flight over ${mapLink("Mường Hoa valley", "Muong Hoa Valley Sapa")}` },
      { time: "", icon: "utensils", event: "Relaxed lunch near Tả Van landing zone" },
      { time: "", icon: "coffee", event: `Scenic terrace cafes overlooking ${mapLink("Cat Cat Village", "Cat Cat Village Sapa")}` },
      { time: "", icon: "utensils", event: `Dinner at ${mapLink("Chợ Tình Quán", "Cho Tinh Quan Fansipan Sapa")}` }
    ],
    quickStats: {
      duration: "Full Day (Day 6)",
      pace: "High-Adrenaline & Terraced Views",
      transport: "Charter / Taxi & Mountain Glide",
      bestPhotoSpot: "In-flight GoPro over Muong Hoa terraces"
    },
    coordinates: { lat: 22.3167, lng: 103.8500, query: "Muong+Hoa+Valley+Sapa" }
  },
  {
    id: 7,
    stopNumber: "STOP 7",
    dayLabel: "DAY 7",
    title: "RETURN TO HANOI & VINTAGE CAFES",
    dates: "March 12, 2027 (Fri)",
    region: "Hanoi",
    regionColor: "#2A9D8F",
    heroImage: "images/Nau Cafe.jpeg",
    fallbackImage: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/Nau Cafe.jpeg",
        fallback: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=85",
        caption: "Nâu Cafe & Cassette Workshop (Vintage Drip Coffee)"
      },
      {
        src: "images/Du palace Hotel.jpeg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Re-check into Du Palace Hotel Hanoi"
      },
      {
        src: "images/Ta hien street.jpg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Old Quarter Evening Atmosphere & Souvenir Walk"
      }
    ],
    tagline: "07:30 Luxury Bus, Nâu Cafe Cassette Workshop, Old Quarter Souvenirs & Dinner",
    summary: "07:30 Depart Sapa via luxury bus -> Arrive Hanoi (~13:00) ➔ Re-check into Du Palace Hotel -> Visit Nâu Cafe & Cassette Workshop -> Old Quarter souvenir shopping & dinner",
    highlightPoints: [
      `07:30: Depart Sapa via luxury bus back to Hanoi`,
      `Arrive Hanoi (~13:00) ➔ Re-check into ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")}`,
      `Visit ${mapLink("Nâu Cafe & Cassette Workshop", "Nau Cafe Cassette Workshop Hanoi")}`,
      `Final Old Quarter walk & souvenir shopping`,
      `Dinner in Old Quarter`
    ],
    detailedSchedule: [
      { time: "07:30", icon: "bus", event: `Depart Sapa via luxury bus back to Hanoi` },
      { time: "~13:00", icon: "car", event: `Arrive Hanoi ➔ Re-check into ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")}` },
      { time: "", icon: "coffee", event: `Visit ${mapLink("Nâu Cafe & Cassette Workshop", "Nau Cafe Cassette Workshop Hanoi")}` },
      { time: "", icon: "camera", event: `Final Old Quarter walk & souvenir shopping` },
      { time: "", icon: "utensils", event: `Dinner in Old Quarter` }
    ],
    quickStats: {
      duration: "Full Day (Day 7)",
      pace: "Bus Transfer & Vintage Cafes",
      transport: "Luxury Express Bus & Foot",
      bestPhotoSpot: "Cassette tape wall at Nâu Cafe"
    },
    coordinates: { lat: 21.0315, lng: 105.8520, query: "Hanoi+Old+Quarter" }
  },
  {
    id: 8,
    stopNumber: "STOP 8",
    dayLabel: "DAY 8",
    title: "FINAL MORNING & FLIGHT HOME",
    dates: "March 13, 2027 (Sat)",
    region: "Hanoi & Departure",
    regionColor: "#E63946",
    heroImage: "images/Hoam Kiem Lake.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
    gallery: [
      {
        src: "images/Hoam Kiem Lake.jpg",
        fallback: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=85",
        caption: "Peaceful Morning Stroll around Hoàn Kiếm Lake"
      },
      {
        src: "images/Du palace Hotel.jpeg",
        fallback: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=85",
        caption: "Check out of Du Palace Hotel & Airport Transfer"
      }
    ],
    tagline: "Morning Stroll around Hoàn Kiếm Lake, Checkout & Departure Flight Home",
    summary: "Relaxed breakfast at hotel & morning stroll around Hoàn Kiếm Lake -> 12:00 Check out of Du Palace Hotel & airport transfer -> Flight back home to Malaysia 🇲🇾",
    highlightPoints: [
      `Breakfast & morning stroll around ${mapLink("Hoàn Kiếm Lake", "Hoan Kiem Lake Hanoi")}`,
      `12:00: Check out of ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} & airport transfer`,
      `Flight back home to Malaysia 🇲🇾`
    ],
    detailedSchedule: [
      { time: "", icon: "coffee", event: `Breakfast & stroll around ${mapLink("Hoàn Kiếm Lake", "Hoan Kiem Lake Hanoi")}` },
      { time: "12:00", icon: "car", event: `Check out of ${mapLink("Du Palace Hotel", "Du Palace Hotel Hanoi")} & airport transfer` },
      { time: "", icon: "landmark", event: `${mapLink("Noi Bai International Airport", "Noi Bai International Airport Terminal 2 Hanoi")} (Terminal 2)` },
      { time: "14:50", icon: "plane", event: "Departure flight back home to Malaysia 🇲🇾" }
    ],
    quickStats: {
      duration: "Morning & Afternoon (Day 8)",
      pace: "Relaxed Walk & Departure",
      transport: "Foot, Private Transfer & Flight",
      bestPhotoSpot: "Lake reflection morning view"
    },
    coordinates: { lat: 21.2212, lng: 105.8072, query: "Noi+Bai+Airport" }
  }
];

if (typeof window !== 'undefined') {
  window.ITINERARY_DATA = ITINERARY_DATA;
}
