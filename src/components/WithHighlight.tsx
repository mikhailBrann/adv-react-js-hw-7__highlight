import Popular from "./Popular";
import New from "./New";

function WithHighlight(WrappedComponent: React.ComponentType<any>) {
    return function(props: any) {
        if (props.views >= 1000) {
            return (
                <Popular>
                    <WrappedComponent {...props} />
                </Popular>
            );
        } else if (props.views < 100) {
            return (
                <New>
                    <WrappedComponent {...props} />
                </New>
            );
        }
        return <WrappedComponent {...props} />;
    }
}

export default WithHighlight;