import Bike, { validateBike } from "../../models/Bike.js";
import validationErrorMessage from "../../util/validationErrorMessage.js";
import { logError } from "../../util/logging.js";
// import bcrypt from "bcrypt";
// import validator from "validator";

const updateBike = async(req, res) => {
    try {
        const { id: bikeID } = req.params;

        const { bike } = req.body;
        if (typeof bike !== "object") {
            return res.status(400).json({
                success: false,
                msg: `You need to provide a 'bike' object. Received: ${JSON.stringify(
          bike
        )}`,
            });
        }

        const errorList = validateBike(bike, false);
        if (errorList.length > 0) {
            return res
                .status(400)
                .json({ success: false, msg: validationErrorMessage(errorList) });
        }

        const updatedBike = await Bike.findByIdAndUpdate(
            bikeID, {
                $set: bike,
            }, { new: true }
        );

        return res.status(200).json({ success: true, bike: updatedBike });
    } catch (error) {
        logError(error);
        res.status(500).json({
            success: false,
            msg: "Unable to update bike, try again later",
        });
    }
};

export default updateBike;