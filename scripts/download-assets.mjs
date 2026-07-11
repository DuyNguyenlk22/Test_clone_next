// Downloads all assets from draisgroup.com (Drai's After Hours) to public/
// Usage: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const A = "https://cdn.prod.website-files.com/68ff38237795f19a09e5e13d/"; // structural
const B = "https://cdn.prod.website-files.com/68ff38237795f19a09e5e15b/"; // events + gallery

// Structural assets with semantic local names
const structural = [
  [A + "69e09f57bef84958e0c85eec_Vector.avif", "images/drais-logo.avif"],
  [A + "6a15ab108fb8797a8b78ae6f_after-hrs-logo-upd.avif", "images/after-hours-logo.avif"],
  [A + "69df7e0af678dff1c436279b_e9dea8f85ecb0ffef85b2d31e245703ba92808ee.avif", "images/hero-bg.avif"],
  [A + "6a1457f859bf88a1d19bfbdc_Drais-242.webp", "images/experience.webp"],
  [A + "693ae94f7a1f60b7b4ae738b__private-events_11zon.webp", "images/private-events.webp"],
  [A + "68ff38237795f19a09e5e144_location.svg", "images/location.svg"],
  [A + "68ff38237795f19a09e5e14c_phone.svg", "images/phone.svg"],
  [A + "68ff38237795f19a09e5e14b_instagram.svg", "images/instagram.svg"],
  [A + "68ff38237795f19a09e5e148_x.svg", "images/x.svg"],
  [A + "68ff38237795f19a09e5e149_facebook.svg", "images/facebook.svg"],
];

// Fonts
const fonts = [
  [A + "69df85f51b690a446434fef3_fonnts.com-Beloved_Sans_Bold.otf", "fonts/BelovedSans-Bold.otf"],
  [A + "69ce96ab4859581cda6596f6_NeueHaasDisplay-Roman.woff2", "fonts/NeueHaasDisplay-Roman.woff2"],
  [A + "69ce96ab18ad515fe53bf001_NeueHaasDisplay-Light.woff2", "fonts/NeueHaasDisplay-Light.woff2"],
  [A + "69ce96ab2f2f9130a0102737_NeueHaasDisplay-Mediu.woff2", "fonts/NeueHaasDisplay-Medium.woff2"],
  [A + "68ff4e1cc60b90ab8cc3414b_SF-Pro-Display-Regular.otf", "fonts/SFProDisplay-Regular.otf"],
];

// Event flyers (folder B, *.jpeg / *.avif that are promo flyers). Keep original hash name.
const eventFlyers = [
  "6a3c76b3d472037fcd8dbf6f_9H3Ji-1782347441587-HNLA.jpeg",
  "6a4ec8e0af6652c4798ef003_4ITyX-1783548124405-HITC.jpeg",
  "6a42d03c8707bb1b51ca266b_FbVGw-1782763579030-UFhn.jpeg",
  "6a3c7674af1e0769e1313c4f_c2eaK-1782347378422-13Oa.jpeg",
  "6a35b946f12a1f28f686681c_UTpQR-1781905733377-LaBw.jpeg",
  "6a3c78288c76d0984efc89b3_EJkss-1782347814726-7AAN.jpeg",
  "6a3c7837a8a7641823a97b7e_Dm1VP-1782347830035-e0qe.jpeg",
  "6a3c793ed472037fcd8fc2b1_11uDZ-1782348093065-Gw6f.jpeg",
  "6a3c795e1c415b6902a5c56f_uaP6D-1782348124390-7mZo.jpeg",
  "6a46f81f9a45040b986896bb_PFCfH-1783035932248-SSir.jpeg",
  "6a4ef7bd531042c5250df452_F69WF-1783560123910-Og9C.jpeg",
  "6a46cd3ca477954d9ccf6e13_lADAW-1783024954770-HGRf.jpeg",
  "6a46cd6654318d61de4cd606_DM9Jk-1783024995871-pEcM.jpeg",
  "6a1ec1220925312bdea37066_4tTVS-1779927236421-rQ8L.avif",
  "6a46d1837aec836cce815eda_IP5iU-1783026048127-6esI.jpeg",
  "6a46d3667b5a3b54fb460b98_P7W9q-1783026533129-1pGi.jpeg",
  "6a46d3757b5a3b54fb461751_GOUCu-1783026546304-4rf6.jpeg",
  "6a1ec16b0925312bdea39a67_VUKMA-1779925522025-v3TE.avif",
  "6a1ec15ef4561d52ffdfc115_EVKer-1779925983860-bN9W.avif",
  "6a1ec16fc81bd0f2d64fa52a_ZHnFS-1779925519435-Bkgy.avif",
];

// Gallery photos (folder B, *_n.avif / _n.jpeg — Instagram-style)
const gallery = [
  "69b32bdcf4ccc86d08c0e1b1_607523153_18555299272001893_1893165482309710805_n.avif",
  "69b32bdb4e3ae0891e7dec22_610099058_719922234211361_2363526348509597984_n.avif",
  "69b32bda6cc017aca0a1925f_610768683_18557319712001893_685482686208049780_n.avif",
  "69b32bd72dc8dcee1ccc2694_615838227_18557876668001893_4007181915779721449_n.avif",
  "69b32bd72dc8dcee1ccc2663_616122262_1390562952611559_4665618934681034216_n.avif",
  "69b32bd656e3a5694dbf5559_631736452_18567190027001893_6412479445453636572_n.avif",
  "69b32bd656e3a5694dbf54ea_634316963_18569230615001893_2250745381362699314_n.avif",
  "69b32bd5ac00e6f596cb2572_641281756_1633272111180388_1409489765242474415_n.avif",
  "69b32bd5f50a41e36c169977_642429718_18573143431001893_8963283287877168783_n.avif",
  "69b32bd46cc017aca0a18f2b_645598245_1230624552035841_5557361018583548560_n.avif",
  "69b32bd416d72677e08d76d3_642310485_1929663157909183_8554814698888534195_n.avif",
  "69b32a4b38ce6fec291b1e3c_649590185_1912768949345986_5758306755861138301_n.jpeg",
];

const jobs = [
  ...structural,
  ...fonts,
  ...eventFlyers.map((f) => [B + f, "images/events/" + f.replace(/^[0-9a-f]+_/, "").toLowerCase()]),
  ...gallery.map((f, i) => [B + f, `images/gallery/photo-${String(i + 1).padStart(2, "0")}.${f.split(".").pop()}`]),
];

const PUBLIC = new URL("../public/", import.meta.url).pathname;

async function download([url, rel]) {
  const dest = join(PUBLIC, rel);
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0", Referer: "https://www.draisgroup.com/" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return `${rel} (${(buf.length / 1024).toFixed(0)}kb)`;
}

async function run() {
  const batchSize = 4;
  let ok = 0, fail = 0;
  for (let i = 0; i < jobs.length; i += batchSize) {
    const batch = jobs.slice(i, i + batchSize);
    const results = await Promise.allSettled(batch.map(download));
    for (const r of results) {
      if (r.status === "fulfilled") { ok++; console.log("✓", r.value); }
      else { fail++; console.error("✗", r.reason.message); }
    }
  }
  console.log(`\nDone: ${ok} downloaded, ${fail} failed of ${jobs.length}`);
}
run();
