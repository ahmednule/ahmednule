import php from "../../assets/images/php.svg"
import laravel from "../../assets/images/laravel.svg"
import AuthJS from "../../assets/images/authjs.svg"
import Prisma from "../../assets/images/prisma.svg"
import Supabase from "../../assets/images/supabase.svg"
import PostgreSQL from "../../assets/images/postgresql.svg"
import apollo from "../../assets/images/apollo.svg"
import django from "../../assets/images/django.svg"
import express from "../../assets/images/express.svg"
import graphql from "../../assets/images/graphql.svg"
import node from "../../assets/images/node.svg"
import type { BackEndTech } from "@/types/about"

export const BACKEND_TECHS: BackEndTech[] = [
  {
    name: "Laravel",
    src: laravel,
  },
  {
    name: "PHP",
    src: php,
  },
  {
    name: "NodeJs",
    src: node,
  },
  {
    name: "Express",
    src: express,
  },
  {
    name: "Apollo Server",
    src: apollo,
  },
  {
    name: "GraphQL",
    src: graphql,
  },
  {
    name: "Django",
    src: django,
  },
  {
    name: "Auth.js",
    src: AuthJS,
  },
  {
    name: "Prisma",
    src: Prisma,
  },
  {
    name: "Supabase",
    src: Supabase,
  },
  {
    name: "PostgreSQL",
    src: PostgreSQL,
  },
]
