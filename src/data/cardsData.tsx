"use client";
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
          icon: <BatteryWorking size={42} color="#525252"/>,
        },
        {
          name: "Alerta de violação do painel",
          icon: <Report size={42} />,
        },
        {
          name: "Equipamento sem comunicação",
          icon: <MessageFailed size={42} />,
        },
        {
          name: "Bateria violada",
          icon: <BatteryCharge size={42} />,
        },
        {
          name: "Aleta de violação de painel",
          icon: <PaintedScreen size={42} />,
        },
        {
          name: "Saída de cerca não autorizada",
          icon: <Local size={42} />,
        },
        {
          name: "Acionamento de botão de pânico",
          icon: <PointOut size={42} />,
        },
        {
          name: "Acionamento de botão de pânico",
          icon: <Caution size={42} />,
        },
        {
          name: "Bloqueio",
          icon: <AngryFace size={42} />,
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
          icon: <Refresh size={42} />,
        },
        {
          name: "Sindicância",
          icon: <FileFocus size={42} />,
        },
        {
          name: "Axílio Jurídico",
          icon: <BalanceTwo size={42} />,
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
          icon: <Alarm size={42} />,
        },
        {
          name: "Vistoria de disparos de alarmes",
          icon: <Car size={42} />,
        },
        {
          name: "Preservação",
          icon: <GoodOne size={42} />,
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
          icon: <Tool size={42} />,
        },
        {
          name: "Remoção",
          icon: <ArrowLeft size={42} />,
        },
        {
          name: "Carga de bateria",
          icon: <BatteryWorking size={42} />,
        },
        {
          name: "Troca de pneus",
          icon: <Round size={42} />,
        },
        {
          name: "Combustível",
          icon: <WaterLevel size={42} />,
        },
        {
          name: "Veículo reserva",
          icon: <Car size={42} />,
        },
        {
          name: "MTA - Meio de transporte alternativo",
          icon: <Car size={42} />,
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
          icon: <GoodOne size={42} />,
        },
        {
          name: "Acompanhamento de Inquérido policial",
          icon: <Eyes size={42} />,
        },
        {
          name: "Elaboração de contratos",
          icon: <FileAddition size={42} />,
        },
        {
          name: "Adequação à LGPD",
          icon: <Lock size={42} />,
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
