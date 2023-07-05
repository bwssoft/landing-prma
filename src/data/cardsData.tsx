"use client"
import {
  BatteryWorking,
  Report,
  MessageFailed,
  BatteryCharge,
  PaintedScreen,
  Local,
  PointOut,
  Caution,
  AngryFace,
  Refresh,
  FileFocus,
  BalanceTwo,
  Alarm,
  Car,
  GoodOne,
  Tool,
  ArrowLeft,
  Round,
  WaterLevel,
  Eyes,
  FileAddition,
  Lock,
} from "@icon-park/react";

export const cardsData = [
  {
    id: 1,
    name: "Central de monitoramento",
    icon: "./assets/cards/vision.png",
    modal: {
      text: "Acompanhamos os alertas dos eventos gerados na plataforma de monitoramento veicular 24 horas por dia, 1 dias por semana, durante 365 dias do ano.",
      icons: [
        {
          name: "Carga de bateria",
          icon: <BatteryWorking />,
        },
        {
          name: "Alerta de violação do painel",
          icon: <Report />,
        },
        {
          name: "Equipamento sem comunicação",
          icon: <MessageFailed />,
        },
        {
          name: "Bateria violada",
          icon: <BatteryCharge />,
        },
        {
          name: "Aleta de violação de painel",
          icon: <PaintedScreen />,
        },
        {
          name: "Saída de cerca não autorizada",
          icon: <Local />,
        },
        {
          name: "Acionamento de botão de pânico",
          icon: <PointOut />,
        },
        {
          name: "Acionamento de botão de pânico",
          icon: <Caution />,
        },
        {
          name: "Bloqueio",
          icon: <AngryFace />,
        },
      ],
    },
  },
  {
    id: 2,
    name: "Pronta resposta veicular",
    icon: "./assets/cards/car.png",
    modal: {
      text: "Conta com uma equipe de apoio tático, distribuída em pontos estratégicos da cidade. Nossa tecnologia garante rápida interligação entre nossa central de monitoramento e nossa equipe de prestadores, resultando em uma melhor eficiência em nossas ações de recuperação proveniente de roubo ou furto de veículos e cargas.",
      icons: [
        {
          name: "Recuperação em caso de roubo e furto",
          icon: <Refresh />,
        },
        {
          name: "Sindicância",
          icon: <FileFocus  />,
        },
        {
          name: "Axílio Jurídico",
          icon: <BalanceTwo />,
        },
      ],
    },
  },
  {
    id: 3,
    name: "Pronta resposta patrimonial",
    icon: "./assets/cards/home.png",
    modal: {
      text: "Com objetivo de garantir a segurança do imóvel, a equipe de agentes da PRMA Federal, faz a inspeção para verificar eventuais danos e intrusões buscando garantir a segurança até o término da operação.",
      icons: [
        {
          name: "Vistoria de disparos de alarmes",
          icon: <Alarm />,
        },
        {
          name: "Vistoria de disparos de alarmes",
          icon: <Car />,
        },
        {
          name: "Preservação",
          icon: <GoodOne />,
        },
      ],
    },
  },
  {
    id: 4,
    name: "Assistência veicular 24 horas",
    icon: "./assets/cards/protect.png",
    modal: {
      text: "A nossa Central 24 horas, está preparada para atender seus clientes em todo território nacional, do veículo leve ao extra pesado.",
      icons: [
        {
          name: "Assistência mecânica e elétrica",
          icon: <Tool />,
        },
        {
          name: "Remoção",
          icon: <ArrowLeft />,
        },
        {
          name: "Carga de bateria",
          icon: <BatteryWorking />,
        },
        {
          name: "Troca de pneus",
          icon: <Round />,
        },
        {
          name: "Combustível",
          icon: <WaterLevel />,
        },
        {
          name: "Veículo reserva",
          icon: <Car />,
        },
        {
          name: "MTA - Meio de transporte alternativo",
          icon: <Car />,
        },
      ],
    },
  },
  {
    id: 5,
    name: "Acompanhamento jurídico",
    icon: "./assets/cards/balance-two.png",
    modal: {
      text: "Contando com Equipe Jurídica especializada no Ramo de Rastreamento e Serviços para Empresas de Monitoramento e Segurança Eletrônica, a PRMA oferece essa estrutura para seus Clientes com atuação em Eventuais Demandas Judiciais, Acompanhamento de Inquérito policial, além de Elaboração de Contratos e Implantação do Processo de Adequação à LGPD",
      icons: [
        {
          name: "Atuação em demandas jurídicas",
          icon: <GoodOne />,
        },
        {
          name: "Acompanhamento de Inquérido policial",
          icon: <Eyes />,
        },
        {
          name: "Elaboração de contratos",
          icon: <FileAddition />,
        },
        {
          name: "Adequação à LGPD",
          icon: <Lock />,
        },
      ],
    },
  },
  {
    id: 6,
    name: "Sindicância",
    icon: "./assets/cards/file-focus.png",
    modal: {
      text: "O Serviço de Sindicância da PRMA visa compilar todos os elementos de um sinistro, com embasamento capaz de orientar qualquer decisão para o ressarcimento de um veículo sinistrado por roubo, furto ou danos. O Relatório é altamente detalhado, assinado por profissionais habilitados e revisado pelo Corpo Jurídico da PRMA FEDERAL.",
      icons: [
        {
          name: "",
          icon: "",
        },
      ],
    },
  },
];
