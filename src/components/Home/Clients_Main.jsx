import React from "react";
import Clients from "../common/Clients";

import keralaWaterAuthority from "@/assets/clients/kerala_water_authority.webp";
import municipalCouncilTadipatri from "@/assets/clients/municipal_council_tadipatri.webp";
import thoothukudiSmartCity from "@/assets/clients/thoothukudi_smart_city.webp";
import nelloreMunicipalCorporation from "@/assets/clients/nellore_municipal_corporation.webp";
import municipalCorporationGurugram from "@/assets/clients/municipal_corporation_gurugram.webp";
import thanjavurMunicipalCorporation from "@/assets/clients/thanjavur_municipal_corporation.webp";
import brihanmumbaiMunicipalCorporation from "@/assets/clients/brihanmumbai_municipal_corporation.webp";
import coimbatoreMunicipalCorporation from "@/assets/clients/coimbatore_municipal_corporation.webp";
import ghmc from "@/assets/clients/ghmc.webp";
import suezIndia from "@/assets/clients/suez_india.webp";
import sriMuktsarSahib from "@/assets/clients/sri_muktsar_sahib.webp";
import guwahatiMunicipalCorporation from "@/assets/clients/guwahati_municipal_corporation.webp";
import suratMunicipalCorporation from "@/assets/clients/surat_municipal_corporation.webp";
import dhuleMunicipalCorporation from "@/assets/clients/dhule_municipal_corporation.webp";
import noidaDevelopmentAuthority from "@/assets/clients/noida_development_authority.webp";
import gmada from "@/assets/clients/gmada.webp";
import phedHaryana from "@/assets/clients/phed_haryana.webp";
import phedBhiwani from "@/assets/clients/phed_bhiwani.webp";
import sabarmatiGas from "@/assets/clients/sabarmati_gas.webp";
import indoreMunicipalCorporation from "@/assets/clients/indore_municipal_corporation.webp";
import barc from "@/assets/clients/barc.webp";
import tiruppurMunicipality from "@/assets/clients/tiruppur_municipality.webp";
import mysuruCityMunicipalCorporation from "@/assets/clients/mysuru_city_municipal_corporation.webp";
import vadodaraMunicipalCorporation from "@/assets/clients/vadodara_municipal_corporation.webp";
import puriMunicipality from "@/assets/clients/puri_municipality.webp";
import cityOfPatna from "@/assets/clients/city_of_patna.webp";
import indianOil from "@/assets/clients/indian_oil.webp";
import perambalurMunicipality from "@/assets/clients/perambalur_municipality.webp";
import greaterVisakhapatnamMunicipalCorporation from "@/assets/clients/greater_visakhapatnam_municipal_corporation.webp";
import ulhasnagarMunicipalCorporation from "@/assets/clients/ulhasnagar_municipal_corporation.webp";
import tirunelveliMunicipalCorporation from "@/assets/clients/tirunelveli_municipal_corporation.webp";
import templetechInnovations from "@/assets/clients/templetech_innovations.webp";
import handInHandIndia from "@/assets/clients/hand_in_hand_india.webp";
import bharatPetroleum from "@/assets/clients/bharat_petroleum.webp";
import tataTrusts from "@/assets/clients/tata_trusts.webp";
import tcs from "@/assets/clients/tcs.webp";
import larsenToubro from "@/assets/clients/larsen_toubro.webp";
import cochinShipyard from "@/assets/clients/csl.webp";
import hindustanPetroleum from "@/assets/clients/hindustan_petroleum.webp";
import coalIndia from "@/assets/clients/coal_india.webp";
import adityaBirla from "@/assets/clients/aditya_birla.webp";
import kumbakonamMunicipality from "@/assets/clients/kumbakonam_municipality.webp";
import municipalCouncilAmbala from "@/assets/clients/municipal_council_ambala.webp";
import cHed from "@/assets/clients/c_hed.webp";
import geniusInfraEngineering from "@/assets/clients/genius_infra_engineering.webp";
import greaterJaipur from "@/assets/clients/greater_jaipur.webp";
import hsvp from "@/assets/clients/hsvp.webp";
import haryanaUrbanDevelopmentAuthority from "@/assets/clients/haryana_urban_development_authority.webp";
import jaipurHeritage from "@/assets/clients/jaipur_heritage.webp";
import jalSansthanDehradun from "@/assets/clients/jal_sansthan_dehradun.webp";
import jalkalVibhagNagarNigam from "@/assets/clients/jalkal_vibhag_nagar_nigam.webp";
import kanpurNagarNigam from "@/assets/clients/kanpur_nagar_nigam.webp";
import karurMunicipality from "@/assets/clients/karur.webp";
import khilariInfrastructure from "@/assets/clients/khilari_infrastructure.webp";
import municipalCommitteeOfLeh from "@/assets/clients/municipal_committee_of_leh.webp";
import meerutCityMunicipalCorporation from "@/assets/clients/meerut_city_municipal_corporation.webp";
import municipalCorporationChandigarh from "@/assets/clients/municipal_corporation_chandigarh.webp";
import nagpurNagarNigam from "@/assets/clients/nagpur_nagar_nigam.webp";
import corporationOfPanaji from "@/assets/clients/corporation_of_panaji.webp";
import sangli from "@/assets/clients/sangli.webp";
import shristiInfraEngineering from "@/assets/clients/shristi_infraengineering.webp";
import silvassaMunicipalCouncil from "@/assets/clients/silvassa_municipal_council.webp";
import technocraftConstruction from "@/assets/clients/technocraft_construction.webp";
import municipalCorporationUjjain from "@/assets/clients/municipal_corporation_ujjain.webp";
import vasaiVirarMunicipalCorporation from "@/assets/clients/vasai_virar_municipal_corporation.webp";
import thiruvananthapuramCorporation from "@/assets/clients/thiruvananthapuram_corporation.webp";
import cherthalaMunicipality from "@/assets/clients/cherthala_municipality.webp";
import kannurMunicipalCorporation from "@/assets/clients/kannur_municipal_corporation.webp";
import kozhikodeMunicipalCorporation from "@/assets/clients/kozhikode_municipal_corporation.webp";
import municipalCorporationAurangabad from "@/assets/clients/municipal_corporation_aurangabad.webp";
import cmwssb from "@/assets/clients/cmwssb.webp";
import gujaratUrbanDevelopmentMission from "@/assets/clients/gudm.webp";
import indahWater from "@/assets/clients/indah_water.webp";
const clientsData = [
  { image: keralaWaterAuthority, alt: "Kerala Water Authority" },
  { image: municipalCouncilTadipatri, alt: "Municipal Council Tadipatri" },
  { image: thoothukudiSmartCity, alt: "Thoothukudi Smart City" },
  { image: nelloreMunicipalCorporation, alt: "Nellore Municipal Corporation" },
  {
    image: municipalCorporationGurugram,
    alt: "Municipal Corporation Gurugram",
  },
  {
    image: thanjavurMunicipalCorporation,
    alt: "Thanjavur Municipal Corporation",
  },
  {
    image: brihanmumbaiMunicipalCorporation,
    alt: "Brihanmumbai Municipal Corporation",
  },
  {
    image: coimbatoreMunicipalCorporation,
    alt: "Coimbatore Municipal Corporation",
  },
  { image: ghmc, alt: "GHMC" },
  { image: suezIndia, alt: "SUEZ India" },
  { image: sriMuktsarSahib, alt: "Sri Muktsar Sahib" },
  {
    image: guwahatiMunicipalCorporation,
    alt: "Guwahati Municipal Corporation",
  },
  { image: suratMunicipalCorporation, alt: "Surat Municipal Corporation" },
  { image: dhuleMunicipalCorporation, alt: "Dhule Municipal Corporation" },
  { image: noidaDevelopmentAuthority, alt: "Noida Development Authority" },
  { image: gmada, alt: "GMADA" },
  { image: phedHaryana, alt: "PHED Haryana" },
  { image: phedBhiwani, alt: "PHED Bhiwani" },
  { image: sabarmatiGas, alt: "Sabarmati Gas" },
  { image: indoreMunicipalCorporation, alt: "Indore Municipal Corporation" },
  { image: barc, alt: "BARC" },
  { image: tiruppurMunicipality, alt: "Tiruppur Municipality" },
  {
    image: mysuruCityMunicipalCorporation,
    alt: "Mysuru City Municipal Corporation",
  },
  {
    image: vadodaraMunicipalCorporation,
    alt: "Vadodara Municipal Corporation",
  },
  { image: puriMunicipality, alt: "Puri Municipality" },
  { image: cityOfPatna, alt: "City of Patna" },
  { image: indianOil, alt: "Indian Oil" },
  { image: perambalurMunicipality, alt: "Perambalur Municipality" },
  {
    image: greaterVisakhapatnamMunicipalCorporation,
    alt: "Greater Visakhapatnam Municipal Corporation",
  },
  {
    image: ulhasnagarMunicipalCorporation,
    alt: "Ulhasnagar Municipal Corporation",
  },
  {
    image: tirunelveliMunicipalCorporation,
    alt: "Tirunelveli Municipal Corporation",
  },
  { image: templetechInnovations, alt: "Templetech Innovations" },
  { image: handInHandIndia, alt: "Hand in Hand India" },
  { image: bharatPetroleum, alt: "Bharat Petroleum" },
  { image: tataTrusts, alt: "Tata Trusts" },
  { image: tcs, alt: "TCS" },
  { image: larsenToubro, alt: "Larsen & Toubro" },
  { image: cochinShipyard, alt: "Cochin Shipyard Limited" },
  { image: hindustanPetroleum, alt: "Hindustan Petroleum" },
  { image: coalIndia, alt: "Coal India" },
  { image: adityaBirla, alt: "Aditya Birla" },
  { image: kumbakonamMunicipality, alt: "Kumbakonam Municipality" },
  {
    image: municipalCouncilAmbala,
    alt: "Municipal Council Ambala",
  },
  { image: cHed, alt: "C-HED" },
  {
    image: geniusInfraEngineering,
    alt: "Genius Infra Engineering",
  },
  { image: greaterJaipur, alt: "Greater Jaipur" },
  { image: hsvp, alt: "HSVP" },
  {
    image: haryanaUrbanDevelopmentAuthority,
    alt: "Haryana Urban Development Authority",
  },
  { image: jaipurHeritage, alt: " Jaipur Heritage" },
  { image: jalSansthanDehradun, alt: " Jal Sansthan Dehradun" },
  {
    image: jalkalVibhagNagarNigam,
    alt: " Jalkal Vibhag Nagar Nigam",
  },
  { image: kanpurNagarNigam, alt: "Kanpur Nagar Nigam" },
  { image: karurMunicipality, alt: "Karur Municipality" },
  {
    image: khilariInfrastructure,
    alt: "Khilari Infrastructure Pvt Ltd",
  },
  {
    image: municipalCommitteeOfLeh,
    alt: "Municipal Committee of Leh",
  },
  {
    image: meerutCityMunicipalCorporation,
    alt: "Meerut City Municipal Corporation",
  },
  {
    image: municipalCorporationChandigarh,
    alt: "Municipal Corporation Chandigarh",
  },
  { image: nagpurNagarNigam, alt: "Nagpur Nagar Nigam" },
  { image: corporationOfPanaji, alt: "Corporation of Panaji" },
  { image: sangli, alt: "Sangli" },
  {
    image: shristiInfraEngineering,
    alt: "Srishti Infra Engineering",
  },
  {
    image: silvassaMunicipalCouncil,
    alt: "Silvassa Municipal Council",
  },
  {
    image: technocraftConstruction,
    alt: "Technocraft Construction",
  },
  {
    image: municipalCorporationUjjain,
    alt: "Municipal Corporation Ujjain",
  },
  {
    image: vasaiVirarMunicipalCorporation,
    alt: "Vasai Virar Municipal Corporation",
  },
  {
    image: thiruvananthapuramCorporation,
    alt: "Corporation of Thiruvananthapuram",
  },
  { image: cherthalaMunicipality, alt: "Municipal Council Cherthala" },
  {
    image: kannurMunicipalCorporation,
    alt: "Municipal Corporation of Kannur",
  },
  {
    image: kozhikodeMunicipalCorporation,
    alt: "Kozhikode Municipal Corporation",
  },
  {
    image: municipalCorporationAurangabad,
    alt: "Municipal Corporation Aurangabad",
  },
  { image: cmwssb, alt: "CMWSSB" },
  {
    image: gujaratUrbanDevelopmentMission,
    alt: "Gujarat Urban Development Mission",
  },
  { image: indahWater, alt: "Indah Water" },
];

function Clients_Main() {
  return (
    <div>
      <Clients clients={clientsData} />
    </div>
  );
}

export default Clients_Main;
