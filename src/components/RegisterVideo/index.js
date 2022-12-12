import React, { Component } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'


function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);
  return {
    values,
    handleChange: (evento) => {
      const value = evento.target.value;
      const name = evento.target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({})
    }
  }
}

const PROJECT_URL = "https://avwfwhzeadrrarehnehq.supabase.co"
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2d2Z3aHplYWRycmFyZWhuZWhxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzA3NjY4NjQsImV4cCI6MTk4NjM0Mjg2NH0.QOxgTqLE8rXftsOiOUn20Gc8x9ZWQd_29NH7ap8NwOE"
const supabase = createClient(PROJECT_URL, PUBLIC_KEY)

function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

function getVideoId(url) {
  const videoId = url.split("v=")[1];
  const ampersandPosition = videoId.index0f("&");
  if (ampersandPosition !== -1) {
    return videoId.substring(0, ampersandPosition);
  }
  return videoId;
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: {
      titulo: "PARÓDIA DO MLK MOTOSSERA - O CARA MAIS SIMPLES DO MUNDO",
      url: "https://www.youtube.com/watch?v=cMDXM5yE5oE",
      playlist: "Anime"
    }
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel
        ? (
          <form onSubmit={(evento) => {
            evento.preventDefault();
            supabase.from("video").insert({
              titulo: formCadastro.values.titulo,
              url: formCadastro.values.url,
              thumb: getThumbnail(formCadastro.values.url),
              playlist: formCadastro.values.playlist
            }).then((oqueveio) => {
              console.log(oqueveio)
            }).catch((err) => {
              console.log(err)
            })
            setFormVisivel(false);
            formCadastro.clearForm();
          }}>
            <div>
              <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                X
              </button>
              <input
                placeholder="Título do vídeo"
                name="titulo"
                value={formCadastro.values.titulo}
                onChange={formCadastro.handleChange} />
              <input
                placeholder="Url do vídeo"
                name="url"
                value={formCadastro.values.url}
                onChange={formCadastro.handleChange} />
              <select name="playlist" onChange={formCadastro.handleChange}>
                <option value="Anime">
                  Anime
                </option>
                <option value="Jogos">
                  Jogos
                </option>
                <option value="Programação">
                  Programação
                </option>
              </select>
              <button type="submit" >
                Cadastrar
              </button>
            </div>
          </form>
        )
        : null
      }
    </StyledRegisterVideo >
  )
}