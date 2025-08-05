# 📝 ToDo List - Mobile Engineering Challenge (React Native)

Aplicativo de lista de tarefas desenvolvido em **React Native com TypeScript**, 
como parte de um desafio técnico com foco em boas práticas, componentes reutilizáveis, experiência do usuário 
e uso de ferramentas de IA para auxilio no desenvolvimento.

---

## ✅ Funcionalidades Obrigatórias

- Tela com uma lista de tarefas
- Cada tarefa possui:
  - Nome (texto)
  - Prioridade: baixa, média ou alta
- Permite:
  - Adicionar nova tarefa
  - Marcar tarefa como concluída
  - Filtrar tarefas por prioridade

---

## ⚙️ Requisitos Técnicos

- [x] Interface simples, porém funcional.
- [x] Desenvolvido com **TypeScript**.
- [x] Armazenamento de dados **em memória** (sem persistência).
- [x] Filtro por prioridade implementado com `botões`, `menus` ou `tabs`.

---

## 📸 Screenshots do APP apresentado durante a entrevista
<img src="https://github.com/user-attachments/assets/63367450-f233-4539-9984-e9cf1e4a4492" width="250" alt="screenshot antes 1" />
<img src="https://github.com/user-attachments/assets/50cd5347-6444-4538-ac09-28a7ca10916d" width="250" alt="screenshot antes 2" />
<img src="https://github.com/user-attachments/assets/8778bc2f-bfe4-42b5-90f6-772a3d8fa007" width="250" alt="screenshot antes 2" />

---

---

## 🧠 O que aprendi / faria diferente

Durante a entrevista técnica, consegui implementar boa parte das funcionalidades principais propostas:

- Tela com lista de tarefas
- Cada tarefa contendo:
  - Nome (texto)
  - Prioridade: baixa, média ou alta
- Adição de nova tarefa
- Marcar tarefas como concluídas

A única funcionalidade que ficou faltando no momento da entrevista foi o **filtro por prioridade**.

---

### 📌 O que eu faria diferente

#### 1. Melhor uso da IA como assistente técnico  
Durante a entrevista, poderia ter aproveitado melhor a IA para:
- Estruturar o projeto com base em boas práticas de **Clean Architecture**
- Criar um prompt mais completo desde o início, como por exemplo:

```txt
Na tela de listagem de tarefas, quero um título "Lista de tarefas".
Desejo um filtro por prioridade (botões ou chips) entre o título e a lista.
A lista deve usar FlatList por performance.
Cada tarefa deve ter:
  - Barra lateral colorida indicando a prioridade:
    - Alta: vermelho
    - Média: amarelo
    - Baixa: verde
  - Um checkbox à esquerda para marcar como concluída
  - O nome da tarefa em uma linha, com reticências se for longo
Também quero um botão flutuante no canto inferior direito para abrir um modal de nova tarefa.
Seguir boas práticas com Clean Architecture, componentes reutilizáveis e escala de 8pt na UI.
```

#### 2. Comunicação mais clara durante a entrevista
Deveria ter explicado melhor minhas ideias e raciocínio técnico, já que a comunicação era um dos critérios de avaliação. 
Algumas melhorias que implementei depois da entrevista já estavam planejadas, mas não consegui expressá-las com clareza no momento.

---
## 🚀 Melhorias Adicionais

Após o término da entrevista, decidi finalizar o TODO List e aplicar melhorias que havia comentado como possíveis evoluções.

Além do requisito obrigatório que faltou, implementei ajustes visuais e funcionais:

- ✅ Adição da **lib `react-native-paper`** para componentes de UI consistentes
- ✅ Filtro por prioridade com **`Chip`s estilizados** (ativo azul, inativo branco)
- ✅ Checkbox reposicionado para a esquerda com clique limitado apenas à área do ícone
- ✅ Substituição do botão flutuante por **`FAB` do react-native-paper**
- ✅ Modal de criação/edição com UI aprimorada usando:
  - `Button`
  - `Dialog`
  - `Portal`
  - `Text`
  - `TextInput`
  - `RadioButton`
- ✅ Adicionado **swipe com `Swipeable`** no item de tarefa:
  - Exibe botões de **editar** e **excluir**
  - Animação suave de entrada
  - Swipe fecha automaticamente após salvar
- ✅ Funcionalidade completa de **editar e excluir tarefas**

---

## 📸 Screenshots do APP Atualizado

<img src="https://github.com/user-attachments/assets/d9ee433a-c092-4a1c-bbed-30bdf2b9a98a" width="250" alt="screenshot atualizado 1" />
<img src="https://github.com/user-attachments/assets/ca0d5e28-4e27-4e1c-bdc2-6c4d0b7e0c87" width="250" alt="screenshot atualizado 2" />
<img src="https://github.com/user-attachments/assets/dadabc52-1729-4ea0-8c75-675df7d9ea35" width="250" alt="screenshot atualizado 3" />

---

## ▶️ Como Rodar

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/todo-app.git
cd todo-app
```
2. Instale as dependências:
```bash
npm install
# ou
yarn install

```
3. Rode com o Expo:
```bash
npx expo start
```

---

🤖 Uso de IA
- A estrutura do projeto e parte dos componentes foram otimizados com auxílio do ChatGPT para garantir organização e boas práticas.
- Os estilos e animações de swipe foram ajustados com suporte da IA.
- Todo o código foi cuidadosamente revisado, adaptado e testado manualmente após sugestões da IA.

---

🛠️ Stack
- React Native
- TypeScript
- React Native Paper
- React Native Gesture Handler
- Expo






















