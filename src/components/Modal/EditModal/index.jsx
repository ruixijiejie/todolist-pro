import React, { useRef } from 'react';
import './index.scss';

import Modal from '../';

import { formatDateTime } from '../../../libs/utils';

const EditModal = (props) => {

    const { isShowEditModal, data, submitEdit } = props,
        inputRef = useRef(),
        checkRef = useRef();

    const formatNewData = () => {
        const val = inputRef.current.value.trim(),
            valLen = val.length;
        if (valLen === 0) {
            inputRef.current.value = data.content;
            return;
        }
        const newData = {
            id: new Date().getTime(),
            content: val,
            completed: checkRef.current.checked
        }
        submitEdit(newData, data.id);
    }

    return (
        <Modal
            isShowModal={ isShowEditModal }
            modalTitle="编辑事件"
        >
            <p className="topic">
                时间：{ formatDateTime(data.id) }
            </p>
            <p className="topic">
                <textarea
                    ref={ inputRef }
                    defaultValue={ data.content }
                    className="text-area"
                >

                </textarea>
            </p>
            <p className="topic">
                状态：
                <input
                    type="checkbox"
                    defaultChecked={ data.completed }
                    ref={ checkRef }
                />
            </p>
            <button
                className="brn btn-primary comfirm-btn"
                onClick={ formatNewData }
            >
                提交
            </button>
        </Modal>
    );
};

export default EditModal;