  display_result = document.getElementById('results')
      display_achieve = document.getElementById('achieve')
      display_records = document.getElementById('records')
      updated_records = document.getElementById('update_record')
      const selected = ['Rock','Scissor','Paper']
      const tracks = {
        win:0,
        loss: 0,
        Tie:0
      }
      
      console.log(JSON.parse(localStorage.getItem('new_value'))  || tracks)
      
      const handleRandom = (choice) =>{
        const items = Math.floor(Math.random() * selected.length )
        const computer = selected[items]
        if(choice === selected[items]){
          display_result.textContent =(`You choose ${choice} while Computer choose ${computer} \n
           
          `)
          display_achieve.textContent = 'It\'s a tie'
          tracks.Tie += 1
          
        }else if(choice === 'Rock' && computer === 'Scissor' ){
          display_result.textContent=(`You choose ${choice} while Computer choose ${computer} \n
         
          `)
          display_achieve.textContent ='You Won'
          tracks.win += 1
        }
        else if(choice === 'Rock' && computer === 'Paper' ){
          display_result.textContent=(`You choose ${choice} while Computer choose ${computer}\n
          
          `)
          display_achieve.textContent ='You Won'
          tracks.win += 1
        }
        else if(choice === 'Scissor' && computer === 'Paper' ){
          display_result.textContent=(`You choose ${choice} while Computer choose ${computer} \n
           
          `)
          display_achieve.textContent ='You Won'
          tracks.win += 1
        }
        else if(choice === 'Scissor' && computer === 'Rock' ){
          display_result.textContent=(`You choose ${choice} while Computer choose ${computer} \n
           
          `)
          display_achieve.textContent ='You Loss'
          tracks.loss += 1
        }
          else if(choice === 'Paper' && computer === 'Scissor' ){
            display_result.textContent=(`You choose ${choice} while Computer choose ${computer} \n
            
            `)
            display_achieve.textContent ='You Loss'
            tracks.loss += 1
          }
          else if(choice === 'Paper' && computer === 'Rock' ){
            display_result.textContent=(`You choose ${choice} while Computer choose ${computer}\n
           
            `)
            display_achieve.textContent ='You Loss'
            tracks.loss += 1
          }
        // return alert(selected[items])
        else if(choice === 'Reset'){
          tracks.win *= 0 ;
        tracks.Tie *= 0;
        tracks.loss *= 0;
        updated_records.textContent = '';
        
        }
        if(tracks.win > tracks.loss){
          if(tracks.win - tracks.loss  < 2){
            updated_records.textContent =(`You are winning with ${tracks.win - tracks.loss} point`)
          }else{
            updated_records.textContent=(`You are winning with ${tracks.win - tracks.loss} points`)
          }
       
        }else if(tracks.loss > tracks.win){
          if(tracks.loss - tracks.win  < 2){
            updated_records.textContent=(`Computer is winning by ${tracks.loss - tracks.win} point`)
          }else{
            updated_records.textContent=(`Computer is winning with ${tracks.loss - tracks.win} points`)
          }
        }
        
      display_records.textContent = `Wins:${tracks.win}, Losses:${tracks.loss}, Ties:${tracks.Tie}`
      
      localStorage.setItem('new_value', JSON.stringify(tracks))
      }
