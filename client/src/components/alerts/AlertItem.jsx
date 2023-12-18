import Alert from 'react-bootstrap/Alert';

export default function AlertItem({
  type,
  text
}) {
    return(
      <>

        <Alert key={type} variant={type} style={{textAlign: 'center', marginTop: '20px'}}>
            {text}
        </Alert>
    </>
    );
};