function Main() {
    return (
        <div className="row">
            <div className='text'>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Особое обращение с заголовком</h5>
                            <p className="card-text">С вспомогательным текстом ниже в качестве естественного перехода к
                                дополнительному контенту.</p>
                            <a href="/create" className="text-center btn btn-primary">Перейти куда-нибудь</a>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Особое обращение с заголовком</h5>
                            <p className="card-text">С вспомогательным текстом ниже в качестве естественного перехода к
                                дополнительному контенту.</p>
                            <a href="/note" className=" btn btn-primary">Перейти куда-нибудь</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">


                <div className="text">
                    <p><b>ShareNotes</b> – сервис для обмена заметками. Создайте заметку, отправьте ссылку на заметку и
                        ваш друг сможет ее просмотреть.
                        После просмотра заметка будет удалена (или по истечении 15 минут с момента создания).</p>
                    <p>Как сделать заметку? </p>
                    <ul>
                        <li>Пройдите по ссылке</li>
                        <li>Вставьте текст и нажмите Create</li>
                        <li>Отправьте сгенерированный адрес другу!</li>
                    </ul>
                    <p>Как прочитать заметку? Перейдите по присланному URL, либо введите адрес руками здесь.</p>
                </div>
            </div>
        </div>
    );
}

export default Main;